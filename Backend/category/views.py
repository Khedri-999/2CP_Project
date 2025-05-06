from rest_framework import generics

from posts.models import PostItem
from posts.serializers import PostItemSerializer
from .models import Category
from .serializers import CategorySerializers



class CategoryListAPIView(generics.ListAPIView) : 
    queryset = Category.objects.all()
    serializer_class = CategorySerializers
class CategoryPostsAPIView(generics.ListAPIView):
    serializer_class = PostItemSerializer

    def get_queryset(self):
        category_id = self.kwargs['category_id']
        return PostItem.objects.filter(category__id=category_id)
