# Generated by Django 5.1.4 on 2025-04-03 21:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0002_image_title_remove_card_image_card_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='image',
            old_name='image1',
            new_name='images',
        ),
    ]
