from django.urls import path
from .views import AllItemsAPIView, PostItemListCreateAPIView , PostItemDetailView

urlpatterns = [
    path('post-items/all/' , AllItemsAPIView.as_view() ,name='all_postItem' ) ,
    path('post-items/', PostItemListCreateAPIView.as_view(), name='PostItem-list-create'),
    path('post-items/<int:pk>/', PostItemDetailView.as_view(), name='PostItem-detail'),
]