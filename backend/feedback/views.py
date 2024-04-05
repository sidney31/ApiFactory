from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Feedback

class feedbackView(APIView):
  def get(self, request, ):
  	return Response(Feedback.objects.all())