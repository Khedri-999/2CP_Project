from rest_framework import serializers
from .models import PostItem
from category.serializers import CategorySerializers


class PostItemSerializer(serializers.ModelSerializer):
    category = CategorySerializers()
     
    class Meta : 
        model = PostItem
        fields = '__all__'


