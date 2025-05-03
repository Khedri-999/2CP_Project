from rest_framework import viewsets, permissions
from .models import Claim
from .serializers import ClaimSerializer

class ClaimViewSet(viewsets.ModelViewSet):
    serializer_class = ClaimSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # only return the current user’s claims
        return Claim.objects.filter(requester=self.request.user)
