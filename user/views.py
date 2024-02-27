from django.contrib import auth
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from mozilla_django_oidc.views import OIDCLogoutView
from rest_framework.views import APIView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.utils.module_loading import import_string

class profile(LoginRequiredMixin, APIView):
  def get(self, request, verify=False):
    return render(request, 'profile.html')

class OIDCCustomLogoutClass(OIDCLogoutView):
  def post(self, request):
    """Log out the user."""
    logout_url = self.redirect_url

    if request.user.is_authenticated:
        # Check if a method exists to build the URL to log out the user
        # from the OP.
        logout_from_op = self.get_settings("OIDC_OP_LOGOUT_URL_METHOD", "")
        if logout_from_op:
            logout_url = import_string(logout_from_op)(request)

        # Log out the Django user if they were logged in.
        auth.logout(request)

    return HttpResponseRedirect(reverse(logout_url))
  