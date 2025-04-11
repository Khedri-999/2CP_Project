from django.urls import path
from login.views import CustomGoogleOAuth2CallbackView, GoogleCallbackTemplateView, login_view
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.oauth2.client import OAuth2Client

from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

@method_decorator(csrf_exempt, name='dispatch')


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    callback_url = "http://localhost:8000/api/auth/google/callback/"
    client_class = OAuth2Client


urlpatterns = [
    path('', login_view, name="login"),
    path('auth/google/', GoogleLogin.as_view(), name="google_login"),
    path('auth/google/callback/', GoogleCallbackTemplateView.as_view(), name="google_callback"),
]
