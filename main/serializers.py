from rest_framework import serializers
from .models import CallbackApplication

class CallbackSerializer(serializers.ModelSerializer):
  class Meta:
    model = CallbackApplication
    fields = ('created', 'name', 'phone', 'question', 'agreement',)