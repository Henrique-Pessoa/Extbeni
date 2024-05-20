from rest_framework.serializers import ModelSerializer
from .models import *


class CustomUserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'
        many = True


class DonationSerializer(ModelSerializer):
    userFK = CustomUserSerializer(many=False)

    class Meta:
        model = Donation
        fields = '__all__'
        many = True
