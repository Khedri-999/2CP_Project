# posts/urls.py
from rest_framework.routers import DefaultRouter
from .views import MyPostViewSet

router = DefaultRouter()
router.register("", MyPostViewSet, basename="mypost")

urlpatterns = router.urls
