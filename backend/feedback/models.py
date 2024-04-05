from django.db import models

class Feedback(models.Model):

	def __str__(self):
		pass

	class Meta:
		verbose_name = 'Feedback'
		verbose_name_plural = 'Feedbacks'