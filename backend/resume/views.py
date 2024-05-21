from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Resume
from .serializers import ResumeSerializer

class resumeView(APIView):
   serializer_class = ResumeSerializer
   
   def get(self, request):
      querySet = self.serializer_class(Resume.objects.all(), many = True)
      return Response({'Resumes':querySet.data})
   
   def post(self, request):
      serializer = self.serializer_class(data=request.data)
      if serializer.is_valid():
         serializer.save()
         return Response('200')
      return Response('400')