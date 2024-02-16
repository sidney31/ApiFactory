from django.db import models
from wagtail.admin.panels import FieldPanel
from wagtail.models import Page

from phonenumber_field.modelfields import PhoneNumberField

class MainPage(Page):
    text = models.CharField(max_length=256)

    content_panels = Page.content_panels + [
        FieldPanel('text')
    ]

class CallbackApplication(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(blank=False, null=False, max_length=100)
    phone = PhoneNumberField(blank=False, null=False)
    agreement = models.BooleanField(blank=False, null=False)
    
    def __str__(self):
        return self.name