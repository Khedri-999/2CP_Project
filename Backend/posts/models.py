from django.db import models

from accounts.models import User

from category.models import Category



class PostItem(models.Model):
    #  Relations
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    #
    name = models.CharField(max_length=20) 
    description = models.TextField()
    date_found = models.DateField()
    location = models.CharField(max_length=200)
    image = models.ImageField(upload_to='Post_items/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} -{self.user.email if self.user else 'Anonymous'}"

    
