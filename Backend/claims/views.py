from rest_framework import permissions , viewsets
from .models import Claim

from .serializers import ClaimSerializer

class ClaimItemViewSet(viewsets.ModelViewSet) : 
    queryset = Claim.objects.all() 
    serializer_class = ClaimSerializer
    permission_classes = [permissions.IsAuthenticated]
    def perform_create(self, serializer):
        serializer.save(requester=self.request.user)

