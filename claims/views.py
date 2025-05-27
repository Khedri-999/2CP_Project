from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import Claim
from .serializers import ClaimSerializer

class ClaimViewSet(viewsets.ModelViewSet):
    serializer_class = ClaimSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['post_item']

    def get_queryset(self):
        return Claim.objects.all()

    @action(detail=True, methods=['post'], url_path='select')
    def select_claim(self, request, pk=None):
        try:
            selected_claim = self.get_object()
            post = selected_claim.post_item

            # Only the finder can accept
            if post.user != request.user:
                return Response({"detail": "Unauthorized"}, status=status.HTTP_403_FORBIDDEN)

            # Update all claims for this post
            all_claims = Claim.objects.filter(post_item=post)
            for claim in all_claims:
                claim.status = 'accepted' if claim == selected_claim else 'rejected'
                claim.save()

            return Response({'message': 'Claim selected successfully.'}, status=status.HTTP_200_OK)

        except Claim.DoesNotExist:
            return Response({'error': 'Claim not found'}, status=status.HTTP_404_NOT_FOUND)
