from rest_framework import serializers
from .models import Claim


class ClaimSerializer(serializers.ModelSerializer) : 
    class Meta : 
        model = Claim
        fields = '__all__'
        read_only_fields = ['requester' ,'status' ,'created_at']



