from django.urls import path
from .views import index, send_callback

app_name = 'main'

urlpatterns = [
    path("", index, name="home"),
    path("send_callback/", send_callback, name="send_callback"),
]
