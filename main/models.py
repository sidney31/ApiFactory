from django.db import models
from wagtail.admin.panels import FieldPanel
from wagtail.models import Page


class MainPage(Page):
    text = models.CharField(max_length=256)

    content_panels = Page.content_panels + [
        FieldPanel('text')
    ]
