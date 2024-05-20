from .views import *
from rest_framework.routers import DefaultRouter
from django.urls import path

router = DefaultRouter()

router.register(r'donations', DonationViews)

urlpatterns = router.urls
