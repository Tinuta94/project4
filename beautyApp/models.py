from django.db import models

class Service(models.Model):
    name        = models.CharField(max_length=25)
    photo_url   = models.CharField(max_length=500)

class Specialists(models.Model):
    name        = models.CharField(max_length=30)
    photo_url   = models.CharField(max_length=500)
    description = models.CharField(max_length=500)
    email       = models.EmailField(max_length=25)
    service     = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='specialists')

class Options(models.Model):
    name        = models.CharField(max_length=30)
    description = models.CharField(max_length=500)
    price       = models.CharField(max_length=10)
    photo_url   = models.CharField(max_length=500)
    service     = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='options')
    