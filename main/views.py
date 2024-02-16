from django.shortcuts import render
from django.http.response import JsonResponse
from .forms import CallbackForm
from rest_framework import generics
from .models import CallbackApplication

def index(request):
    context = {'form': CallbackForm()}
    return render(request, 'main/main_page.html', context)


def send_callback(request):
    context = {}
    if request.method == "POST":
        form = CallbackForm(request.POST)
        if form.is_valid():
            context = {'valid': True}
            CallbackApplication.objects.create(
                name = form.cleaned_data['name'],
                phone = form.cleaned_data['phone'],
                agreement = form.cleaned_data['agreement'],
            )
        else:
            errors = ''
            for field in form.errors:
                if field == 'phone':
                    errors += ('Введите действительный номер телефона (например, +7 (301) 123-45-67)\n')
                    continue
                errors += (f'{form.errors[field].as_text()}\n')
            context = {
                'errors': str(errors)
            }
    return JsonResponse(context)