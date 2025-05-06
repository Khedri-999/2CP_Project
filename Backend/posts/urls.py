from django.urls import path
from .views import AllItemsAPIView, MyPostsAPIView, PostItemListCreateAPIView , PostItemDetailView

urlpatterns = [
    path('post-items/all/' , AllItemsAPIView.as_view() ,name='all_postItem' ) ,
    path('post-items/', PostItemListCreateAPIView.as_view(), name='PostItem-list-create'),
    path('post-items/<int:pk>/', PostItemDetailView.as_view(), name='PostItem-detail'),
    path('post-items/my/', MyPostsAPIView.as_view(), name='my-posts'),
]