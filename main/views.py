from django.shortcuts import render
from django.http.response import JsonResponse
from .forms import CallbackForm
from rest_framework import generics

def index(request):
    context = {'form': CallbackForm()}
    return render(request, 'main/main_page.html', context)


def send_callback(request):
    context = {}
    if request.method == "POST":
        form = CallbackForm(request.POST)
        if form.is_valid():
            context = {'valid': True}
        else:
            context = {'errors': form.errors}
    return JsonResponse(context)