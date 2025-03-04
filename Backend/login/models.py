from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    username = None  # Remove the default username field

    USERNAME_FIELD = 'email'  # Use email as the unique identifier
    REQUIRED_FIELDS = []  

    def save(self, *args, **kwargs):
        if not self.email.endswith("@estin.dz"):
            raise ValueError("Only @estin.dz emails are allowed")
        super().save(*args, **kwargs)
