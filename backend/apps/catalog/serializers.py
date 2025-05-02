from rest_framework.serializers import ModelSerializer
from .models import Card, Category, Image
from rest_framework import serializers

class ImageSerializer(ModelSerializer):
    class Meta:
        model = Image
        fields = ["id", "title", "images"]


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "title"]


class CardSerializer(ModelSerializer):
    category = CategorySerializer(many=True, read_only=True)
    images = ImageSerializer(many=True, read_only=True)
    category_ids = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Category.objects.all(),
        source='category',
        write_only=True,
        required=False
    )

    image_ids = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Image.objects.all(),
        source='images',
        write_only=True,
        required=False
    )
    class Meta:
        model = Card
        fields = [
            "id",
            "title",
            "category",
            "images",
            "text",
            "address",
            "maps",
            "image_ids",
            "category_ids",
        ]
