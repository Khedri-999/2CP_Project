from django.urls import path
from .views import PostItemListCreateAPIView , PostItemDetailView

urlpatterns = [
    path('', PostItemListCreateAPIView.as_view(), name='PostItem-list-create'),
    path('<int:pk>/', PostItemDetailView.as_view(), name='PostItem-detail'),
]