from django.urls import path
from .views import profile

app_name = 'user'

urlpatterns = [
    path("profile/", profile.as_view(), name="profile"),
]