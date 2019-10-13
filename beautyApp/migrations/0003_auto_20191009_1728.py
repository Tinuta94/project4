# Generated by Django 2.1.11 on 2019-10-09 17:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beautyApp', '0002_remove_service_photo_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='photo_url',
            field=models.CharField(default='something', max_length=3000),
        ),
        migrations.AlterField(
            model_name='specialists',
            name='description',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='specialists',
            name='photo_url',
            field=models.CharField(max_length=2000),
        ),
    ]