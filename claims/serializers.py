from rest_framework import serializers
from .models import Claim

class ClaimSerializer(serializers.ModelSerializer):
    requester = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    requester_email = serializers.EmailField(
        source='requester.email',
        read_only=True
    )
    requester_phone = serializers.CharField(
        source='requester.userprofile.phone_number', 
        read_only=True
    )

    name        = serializers.CharField(source='post_item.name', read_only=True)
    image       = serializers.ImageField(source='post_item.image', use_url=True, read_only=True)
    place       = serializers.CharField(source='post_item.location', read_only=True)
    date        = serializers.DateTimeField(source='created_at', format="%Y-%m-%d", read_only=True)
    finderEmail = serializers.EmailField(source='post_item.user.email', read_only=True)
    finderPhone = serializers.CharField(source='post_item.user.userprofile.phone_number',
                                        read_only=True)

    class Meta:
        model = Claim
        fields = [
            'id',
            'requester',         
            'requester_email',   
            'requester_phone',   
            'post_item',
            'message',
            'status',
            'name', 'image', 'place', 'date',
            'finderEmail', 'finderPhone',
        ]
        read_only_fields = [
            'id', 'status',
            'requester', 'requester_email', 'requester_phone',
            'name', 'image', 'place', 'date',
            'finderEmail', 'finderPhone',
        ]
