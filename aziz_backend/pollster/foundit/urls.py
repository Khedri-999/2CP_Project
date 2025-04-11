from django.urls import path
from .views import index, add_lost_item, register, user_logout
from .views import (
    FoundItemListCreateAPIView, FoundItemDetailAPIView,
    LostItemListCreateAPIView, LostItemDetailAPIView,
    CustomTokenObtainPairView
)

from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    # HTML Views
    path('register/', register, name='register'),
    path('logout/', user_logout, name='logout'),

    # API Endpoints
    path('api/found-items/', FoundItemListCreateAPIView.as_view(), name='found_items_list'),
    path('api/found-items/<int:pk>/', FoundItemDetailAPIView.as_view(), name='found_item_detail'),
    path('api/lost-items/', LostItemListCreateAPIView.as_view(), name='lost_items_list'),
    path('api/lost-items/<int:pk>/', LostItemDetailAPIView.as_view(), name='lost_item_detail'),

    # JWT Authentication Endpoints
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),  # Login to get token (access)
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Refresh token
]
