from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import *
from .serializers import *

# Create your views here.


class CustomUserViews(ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer


class DonationViews(ModelViewSet):
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer
