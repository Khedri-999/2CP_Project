from django import forms
from .models import Founditem
from django.contrib.auth.models import User


class foundForm(forms.ModelForm):
    class Meta:
        model = Founditem
        fields = ['name','description','date_found','location']


class registerform(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)  # Hided

    class Meta:
        model = User
        fields = ['username', 'email', 'password'] 


