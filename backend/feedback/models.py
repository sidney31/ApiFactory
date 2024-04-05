from django.db import models

class Feedback(models.Model):
  date = models.DateTimeField(auto_now_add=True)
  name = models.CharField(max_length=100)
  phone = models.IntegerField()
  answer = models.CharField(max_length=100)
  agreement = models.BooleanField()
  
  def __str__(self):
    pass
  
  class Meta:
    verbose_name = 'Feedback'
    verbose_name_plural = 'Feedbacks'