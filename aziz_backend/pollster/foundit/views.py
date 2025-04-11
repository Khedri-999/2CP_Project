from django.shortcuts import render,redirect
from .models import Founditem
from .forms import foundForm ,registerform
from django.contrib.auth import login,logout, authenticate
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404
from .serializers import FoundItemSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.

@login_required
def index(request):
    items = Founditem.objects.filter(user=request.user) # Show only user's items
    return render(request,'foundit/index.html',{'items':items})

@login_required
def add_lost_item(request):
    if request.method == "POST":
        form = foundForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lost_items_list')
    else:
        form = foundForm()
    return render(request,'foundit/add_lost_item.html',{'form':form})

def register(request):
    if request.method == "POST":
        form = registerform(request.POST)
        if form.is_valid():
            user = form.save(commit=False)  
            user.set_password(form.cleaned_data['password'])  # Hash
            user.save()  
            login(request, user)  
            return redirect('lost_items_list')  
    else:
        form = registerform()
    
    return render(request, 'foundit/register.html', {'form': form})


def user_logout(request):
    logout(request)  
    return redirect('lost_items_list') 

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.response import Response
from rest_framework import status, serializers
from django.contrib.auth import authenticate

# Custom JWT serializer
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        email = attrs.get("email", "")
        password = attrs.get("password", "")

        # Check if email ends with @estin.dz
        if not email.endswith("@estin.dz"):
            raise serializers.ValidationError("Only university emails (@estin.dz) are allowed.")

        # Authenticate user
        user = authenticate(email=email, password=password)
        if not user:
            raise serializers.ValidationError("Invalid email or password.")

        # Generate token
        data = super().validate(attrs)
        return data


# Custom JWT View
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

    

 


#founditems
#Instead of APIView, we can use Django's built-in generic views like this:(more simplicity)
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Founditem
from .serializers import FoundItemSerializer

# list all found items (get) and creat new found item (post)
class FoundItemListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = FoundItemSerializer
    permission_classes = [IsAuthenticated] # API requires authentication(JWT)

    def get_queryset(self):
        return Founditem.objects.filter(user=self.request.user)  # Show only user's found items

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)  # Assign user to new found item

# Retrieve, update, delete a single lost item (GET, PUT, DELETE)
class FoundItemDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = FoundItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Founditem.objects.filter(user=self.request.user)
    

#-------------------



#lost items
from .models import LostItem
from .serializers import LostItemSerializer

# List and create lost items
class LostItemListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = LostItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return LostItem.objects.filter(user=self.request.user)  # Show only user's lost items

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)  # Assign user to new lost item

# Retrieve, update, delete a single lost item
class LostItemDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = LostItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return LostItem.objects.filter(user=self.request.user)
