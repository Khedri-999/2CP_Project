from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView
from django.http import JsonResponse
from django.shortcuts import render
from django.views import View
from allauth.socialaccount.providers.oauth2.client import OAuth2Error
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.oauth2.client import OAuth2Client

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    callback_url = "http://localhost:8000/api/auth/google/callback/"
    client_class = OAuth2Client


class CustomGoogleOAuth2CallbackView(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter

    def get_response(self):
        
        response = super().get_response()
        if hasattr(self.user, 'jwt_token'):
            response.data['access'] = self.user.jwt_token['access']
            response.data['refresh'] = self.user.jwt_token['refresh']
        return response



class GoogleCallbackTemplateView(View):
    def get(self, request, *args, **kwargs):
        return render(request, "google_callback.html")


def login_view(request):
    return render(request, "login.html")
