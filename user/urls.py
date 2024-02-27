from django.urls import path
from .views import profile, OIDCCustomLogoutClass

app_name = 'user'

urlpatterns = [
    path("profile/", profile.as_view(), name="profile"),
    path("logout/", OIDCCustomLogoutClass.as_view(), name="custom_oidc_logout_unit"),
]