# posts/serializers.py
from rest_framework import serializers
from .models import PostItem
from claims.models import Claim

class ClaimMiniSerializer(serializers.ModelSerializer):
    requester = serializers.CharField(source='requester.email')
    message   = serializers.CharField()
    date      = serializers.DateTimeField(source='created_at', format="%Y-%m-%d")
    status    = serializers.CharField()

    class Meta:
        model = Claim
        fields = ['id', 'requester', 'message', 'date', 'status']

class PostItemSerializer(serializers.ModelSerializer):
    title         = serializers.CharField(source='name')
    date          = serializers.DateTimeField(source='created_at', format="%Y-%m-%d")
    image         = serializers.ImageField(use_url=True)
    claimRequests = ClaimMiniSerializer(source='requests', many=True, read_only=True)

    class Meta:
        model = PostItem
        fields = ['id', 'title', 'description', 'location', 'date', 'image', 'claimRequests']
