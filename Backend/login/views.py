from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView
from django.http import JsonResponse
from django.shortcuts import render
from django.views import View
from allauth.socialaccount.providers.oauth2.client import OAuth2Error


class CustomGoogleOAuth2CallbackView(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter

    def post(self, request, *args, **kwargs):
        try:
            response = super().post(request, *args, **kwargs)
            user = request.user

            if hasattr(user, 'jwt_token'):
                return JsonResponse(user.jwt_token)
            return response
        except OAuth2Error as ex:
            print(f"OAuth2Error: {str(ex)}")  # Log the error
            return JsonResponse({"error": str(ex)}, status=400)


# Add this to your views.py
class GoogleCallbackTemplateView(View):
    def get(self, request, *args, **kwargs):
        return render(request, "google_callback.html")


def login_view(request):
    return render(request, "login.html")
