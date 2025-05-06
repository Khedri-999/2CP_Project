from django.urls import path 
from .views import CategoryListAPIView, CategoryPostsAPIView

urlpatterns  = [
     path('', CategoryListAPIView.as_view(), name='category-list'),
       path('<int:category_id>/posts/', CategoryPostsAPIView.as_view(), name='category-posts'),
]