app_name = "catalog"

from django.urls import path
from .views import (
    ImageListCreateView,
    ImageDetailView,
    CategoryListCreateView,
    CategoryDetailView,
    CardListCreateView,
    CardDetailView,
)

urlpatterns = [
    # Images
    path("images/", ImageListCreateView.as_view(), name="image-list"),
    path("images/<int:id>/", ImageDetailView.as_view(), name="image-detail"),
    # Categories
    path("category/", CategoryListCreateView.as_view(), name="category-list"),
    path("category/<int:id>/", CategoryDetailView.as_view(), name="category-detail"),
    # Cards
    path("card/", CardListCreateView.as_view(), name="card-list"),
    path("card/<int:id>/", CardDetailView.as_view(), name="card-detail"),
]
