from django.db import models

class Resume(models.Model):
  date = models.DateTimeField(auto_now_add=True)
  name = models.CharField(max_length=100)
  about = models.CharField(max_length=500)
  phone = models.CharField(max_length=100)
  resume = models.FileField(upload_to='uploads_resume')
  
  def __str__(self):
    return name
  
  class Meta:
    verbose_name = 'Resume'