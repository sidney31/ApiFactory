from django.urls import path
from . import views

app_name = 'main'

urlpatterns = [
    path("", views.index, name="home"),
    path("send_callback/", views.send_callback, name="send_callback"),
]
