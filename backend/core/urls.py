from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include("apps.users.urls", namespace='users')),
    path('api/catalog/', include('apps.catalog.urls', namespace='catalog')),
]
