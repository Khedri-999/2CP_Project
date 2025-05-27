from rest_framework.routers import DefaultRouter
from .views import ClaimViewSet

router = DefaultRouter()
router.register('', ClaimViewSet, basename='claim')

urlpatterns = router.urls
