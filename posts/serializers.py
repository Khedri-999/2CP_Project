# posts/serializers.py
from rest_framework import serializers
from .models import PostItem

class PostItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostItem
        fields = [
            "id",
            "category",
            "name",
            "description",
            "location",
            "date_found",
            "time_found",
            "image",
            "blur_image",
            "created_at",
        ]
        read_only_fields = ["id", "created_at"]

    def create(self, validated_data):
        return super().create(validated_data)
