from rest_framework import serializers
from .models import Resume

class ResumeSerializer(serializers.ModelSerializer):
    date = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S')
    class Meta:
        model = Resume
        fields = '__all__'