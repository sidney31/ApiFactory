from django.shortcuts import render
from django.views import View

class profile(View):
  def get(self, request):
    print('yes')
    return render(request, 'profile.html')
