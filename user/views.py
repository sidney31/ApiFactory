from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth.mixins import LoginRequiredMixin

class profile(LoginRequiredMixin, APIView):
  def get(self, request, verify=False):
    return render(request, 'profile.html', )
