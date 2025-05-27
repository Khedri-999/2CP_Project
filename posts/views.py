from rest_framework import generics, permissions
from .models import PostItem
from .serializers import PostItemSerializer

class AllItemsAPIView(generics.ListAPIView):
    """Public: List all found items"""
    serializer_class = PostItemSerializer
    queryset = PostItem.objects.all()
    permission_classes = [permissions.AllowAny]

class PostItemListCreateAPIView(generics.ListCreateAPIView):
    """List/create for authenticated user's posts"""
    serializer_class = PostItemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return PostItem.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class PostItemDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a single PostItem.
    Only the owner may delete or update.
    """
    serializer_class = PostItemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return PostItem.objects.filter(user=self.request.user)
