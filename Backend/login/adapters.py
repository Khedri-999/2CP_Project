from allauth.account.adapter import DefaultAccountAdapter
from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
from django.core.exceptions import ValidationError
from rest_framework_simplejwt.tokens import RefreshToken
from allauth.account.utils import user_field

from accounts.models import UserProfile
class MyAccountAdapter(DefaultAccountAdapter):
    
    def new_user(self, request, sociallogin=None):  
        user = super().new_user(request)
        return user

class MySocialAccountAdapter(DefaultSocialAccountAdapter):
    def is_open_for_signup(self, request, sociallogin):
        email_domain = sociallogin.user.email.split("@")[-1]
        if email_domain != "estin.dz":
            raise ValidationError("Only @estin.dz emails are allowed!")
        return True

    def save_user(self, request, sociallogin, form=None):
        user = super().save_user(request, sociallogin, form)
        user_field(user, 'email', sociallogin.account.extra_data.get('email'))
        user_field(user, 'first_name', sociallogin.account.extra_data.get('given_name'))
        user_field(user, 'last_name', sociallogin.account.extra_data.get('family_name'))
        user.save()

        # Save profile picture and other data in UserProfile
        profile, _ = UserProfile.objects.get_or_create(user=user)
        profile.picture = sociallogin.account.extra_data.get("picture", "")
        profile.save()
        refresh = RefreshToken.for_user(user)
        user.jwt_token = {
            "access": str(refresh.access_token),
            "refresh": str(refresh),
        }
        return user
