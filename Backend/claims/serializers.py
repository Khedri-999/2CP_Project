from rest_framework import serializers
from .models import Claim

class ClaimSerializer(serializers.ModelSerializer):
    # flatten the related PostItem fields to the shape your React wants
    name        = serializers.CharField(source='post_item.title')
    image       = serializers.ImageField(source='post_item.image', use_url=True)
    place       = serializers.CharField(source='post_item.location')
    date        = serializers.DateTimeField(source='created_at', format="%Y-%m-%d")
    finderEmail = serializers.EmailField(source='post_item.owner.email')
    # if you’ve stored a phone number on your User model or a Profile model:
    finderPhone = serializers.CharField(source='post_item.owner.profile.phone', default='', allow_blank=True)

    class Meta:
        model = Claim
        fields = [
            'id', 'name', 'image', 'place', 'date',
            'status', 'finderEmail', 'finderPhone',
        ]
