# posts/views.py
from rest_framework import viewsets, permissions
from .models import PostItem
from .serializers import PostItemSerializer

class MyPostViewSet(viewsets.ModelViewSet):
    serializer_class = PostItemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # only return posts created by the current user
        return PostItem.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        # automatically set the `user` to request.user on create
        serializer.save(user=self.request.user)
