from django.urls import path
from .views import UserProfileDetailView

urlpatterns = [
    path('me/', UserProfileDetailView.as_view(), name='my-profile'),
]