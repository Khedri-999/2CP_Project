from rest_framework import generics
from .models  import PostItem
from .serializers import PostItemSerializer
from rest_framework.generics import RetrieveAPIView

class PostItemListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = PostItemSerializer

    def get_queryset(self):
       queryset = PostItem.objects.all()
       category_name = self.request.query_params.get('category')
       if category_name : 
           queryset = queryset.filter(category__name__iexact=category_name)
       return queryset


class PostItemDetailView(RetrieveAPIView):
    queryset = PostItem.objects.all()
    serializer_class = PostItemSerializer


