from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .manager import UserManager

# Create your models here.


class CustomUser(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField("E-mail address", unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    phoneNumber = models.CharField(max_length=15, null=True, blank=True)
    address = models.CharField(max_length=200)
    cpf = models.CharField(max_length=20)
    photo = models.FileField(upload_to='usersphoto')

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email


class Donation(models.Model):
    userFK = models.ForeignKey(
        CustomUser, related_name="UserDonated", on_delete=models.CASCADE)
    value = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.userFK.email
