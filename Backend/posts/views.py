from rest_framework import generics
from rest_framework.generics import RetrieveAPIView
from .models import PostItem
from .serializers import PostItemSerializer


# List all PostItems (GET)
class AllItemsAPIView(generics.ListAPIView):
    serializer_class = PostItemSerializer

    def get_queryset(self):
        return PostItem.objects.all()


# List all PostItems or filter by category (GET) and create new item (POST)
class PostItemListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = PostItemSerializer

    def get_queryset(self):
        queryset = PostItem.objects.all()
        category_name = self.request.query_params.get('category')
        if category_name:
            queryset = queryset.filter(category__name__iexact=category_name)
        return queryset


# Retrieve details of a single PostItem (GET)
class PostItemDetailView(RetrieveAPIView):
    queryset = PostItem.objects.all()
    serializer_class = PostItemSerializer
