from django.urls import path
from .views import AllItemsAPIView, PostItemListCreateAPIView, PostItemDetailAPIView

urlpatterns = [
    path('post-items/all/' , AllItemsAPIView.as_view() ,name='all_postItem' ) ,
    path('post-items/', PostItemListCreateAPIView.as_view(), name='PostItem-list-create'),
    path('post-items/<int:pk>/', PostItemDetailAPIView.as_view(), name='PostItem-detail'),

]