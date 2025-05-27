from rest_framework import generics
from .models import Category
from .serializers import CategorySerializers



class CategoryListAPIView(generics.ListAPIView) : 
    queryset = Category.objects.all()
    serializer_class = CategorySerializers
