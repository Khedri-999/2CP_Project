from rest_framework import generics
from rest_framework.generics import RetrieveAPIView
from .models import PostItem
from .serializers import PostItemSerializer

from rest_framework.permissions import IsAuthenticated


# List all PostItems (G
class AllItemsAPIView(generics.ListAPIView):
    serializer_class = PostItemSerializer

    def get_queryset(self):
        return PostItem.objects.all()


# List all PostItems or filter by category and create new item (POST)
class PostItemListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = PostItemSerializer

    def get_queryset(self):
        queryset = PostItem.objects.all()
        category_name = self.request.query_params.get('category')
        if category_name:
            queryset = queryset.filter(category__name__iexact=category_name)
        return queryset


# Retrieve details of a single PostItem 
class PostItemDetailView(RetrieveAPIView):
    queryset = PostItem.objects.all()
    serializer_class = PostItemSerializer


class MyPostsAPIView(generics.ListAPIView):
    serializer_class = PostItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return PostItem.objects.filter(user=self.request.user)
