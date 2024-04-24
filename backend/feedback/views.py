from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Feedback
from .serializers import FeedbackSerializer

class feedbackView(APIView):
   serializer_class = FeedbackSerializer
   
   def get(self, request):
      querySet = self.serializer_class(Feedback.objects.all(), many = True)
      return Response({'feedbacks':querySet.data})
   
   def post(self, request):
      serializer = self.serializer_class(data=request.data)
      if serializer.is_valid():
         serializer.save()
         return Response('200')
      return Response('400')