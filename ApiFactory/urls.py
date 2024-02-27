from django.conf import settings
from django.urls import include, path
from django.contrib import admin

from wagtail.admin import urls as wagtailadmin_urls
from wagtail import urls as wagtail_urls
from main import urls as main_urls
from main.views import CallbackAPI
from user import urls as user_urls

from search import views as search_views

urlpatterns = [
    path('', include(main_urls), name="main"),
    path('user/', include(user_urls), name="user"),
    path('api/v1/callback/', CallbackAPI.as_view()),
    path("admin/", include(wagtailadmin_urls)),
    path("search/", search_views.search, name="search"),
    path("django-admin/", admin.site.urls),
]

if settings.DEBUG:
    from django.conf.urls.static import static
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns

    # Serve static and media files from development server
    urlpatterns += staticfiles_urlpatterns()
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns = urlpatterns + [
    path('oidc/', include('mozilla_django_oidc.urls')),
]
