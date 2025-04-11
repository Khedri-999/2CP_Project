from rest_framework import serializers
from .models import Founditem, LostItem, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username']

class FoundItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Founditem
        fields = '__all__'  # Convert all fields to JSON

class LostItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = LostItem
        fields = '__all__'
