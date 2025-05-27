

from django.db import models

from django.conf import settings
from posts.models import PostItem

class Claim (models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('rejected', 'Rejected'),
    ]

    requester = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='post_item_requests')
    post_item = models.ForeignKey(PostItem, on_delete=models.CASCADE, related_name='requests')
    message = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Request by {self.requester.email} for {self.post_item.title} - {self.status}"

