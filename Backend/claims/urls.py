from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClaimItemViewSet, MyClaimsAPIView

router = DefaultRouter()
router.register(r'requests', ClaimItemViewSet, basename='Post_item_request')

urlpatterns = [
    path('', include(router.urls)),
    path('my-claims/', MyClaimsAPIView.as_view(), name='my-claims'), 
]