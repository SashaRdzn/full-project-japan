# Generated by Django 5.1.4 on 2025-04-03 21:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='title',
            field=models.CharField(blank=True, max_length=20, null=True, verbose_name='Название'),
        ),
        migrations.RemoveField(
            model_name='card',
            name='image',
        ),
        migrations.AddField(
            model_name='card',
            name='image',
            field=models.ManyToManyField(blank=True, null=True, related_name='image', to='catalog.image', verbose_name='Изображения'),
        ),
    ]
