from django.db import models

class CustomDateTimeField(models.DateTimeField):
  def value_to_string(self, obj):
      val = self.value_from_object(obj)
      return "" if val is None else val.isoformat("|", "minutes")

class Feedback(models.Model):
  date = CustomDateTimeField(auto_now_add=True)
  name = models.CharField(max_length=100)
  phone = models.CharField(max_length=100)
  question = models.CharField(max_length=100)
  agreement = models.BooleanField()
  
  def __str__(self):
    pass
  
  class Meta:
    verbose_name = 'Feedback'
    verbose_name_plural = 'Feedbacks'