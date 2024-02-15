from django import forms
from .models import *
from phonenumber_field.formfields import PhoneNumberField

class CallbackForm(forms.Form):
    name = forms.CharField(widget=forms.TextInput(attrs={
        'class': 'form-control',
        'id': 'nameInput',
        'placeholder': 'Имя',
    }))
    number = PhoneNumberField(widget=forms.TextInput(attrs={
        'class': 'form-control',
        'id': 'phoneInput',
        'placeholder': '+7 (___) ___-__-__',
    }))
    agreement = forms.BooleanField(widget=forms.CheckboxInput(attrs={
        'class': 'form-check-input',
        'id': 'personalDataCheck',
    }))
