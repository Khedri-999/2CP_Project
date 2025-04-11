from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
from allauth.socialaccount.models import SocialLogin
from django.core.exceptions import ValidationError
from rest_framework_simplejwt.tokens import RefreshToken

class MySocialAccountAdapter(DefaultSocialAccountAdapter):
    def is_open_for_signup(self, request, sociallogin):
        
        email_domain = sociallogin.user.email.split("@")[-1]
        if email_domain != "estin.dz":
            raise ValidationError("Only @estin.dz emails are allowed!")
        return True

    def save_user(self, request, sociallogin, form=None):
       
        user = super().save_user(request, sociallogin, form)
        
        # Generate JWT token
        refresh = RefreshToken.for_user(user)
        user.jwt_token = {
            "access": str(refresh.access_token),
            "refresh": str(refresh),
        }
        return user
