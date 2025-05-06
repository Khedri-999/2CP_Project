from rest_framework import permissions, viewsets , generics
from .models import Claim
from .serializers import ClaimSerializer


#full CRUD for claims (admin or advanced usage):

class ClaimItemViewSet(viewsets.ModelViewSet):
    queryset = Claim.objects.all()
    serializer_class = ClaimSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(requester=self.request.user)

#for logged-in users to view only their claims

class MyClaimsAPIView(generics.ListAPIView):
    serializer_class = ClaimSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Claim.objects.filter(requester=self.request.user).order_by('-created_at')

