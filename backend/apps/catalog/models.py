# Models for Catalog
# adress
# category
# count
# detail
# image1
# image2
# image3
# img
# maps
# text
# title
from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=50, verbose_name="Категория")
    def __str__(self):
        return self.title

class Image(models.Model):
    title = models.CharField(max_length=20, verbose_name="Название", blank=True, null=True)
    images = models.ImageField(
        upload_to="images/%Y/%m/%d/",
        verbose_name="Изображения",
        null=True,
        blank=True,
    )

    def __str__(self):
        return f"Image-{self.title}"


class Card(models.Model):
    title = models.CharField(max_length=100, blank=True, null=True)
    text = models.TextField(blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    count = models.PositiveSmallIntegerField(default=0)
    maps = models.CharField(max_length=50, blank=True, null=True)

    category = models.ManyToManyField(
        Category,
        blank=True,
        null=True,
        related_name="card_categorys",
        verbose_name="Категория",
    )
    images = models.ManyToManyField(
        Image,
        blank=True,
        null=True,
        related_name="card_images",
        verbose_name="Изображения",
    )
    def __str__(self):
        return self.title
