from rest_framework import serializers
from .models import PostItem
from category.serializers import CategorySerializers
from claims.serializers import ClaimSerializer 

class PostItemSerializer(serializers.ModelSerializer):
    category = CategorySerializers(read_only=True)  
    requests = ClaimSerializer(many=True, read_only=True)

    class Meta:
        model = PostItem
        fields = '__all__'


