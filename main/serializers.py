from rest_framework import serializers
from .models import CallbackApplication

class CallbackSerializer(serializers.ModelSerializer):
  class Meta:
    model = CallbackApplication
    fields = ('name', 'phone', 'agreement')