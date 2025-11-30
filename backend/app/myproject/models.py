from django.db import models

class Product(models.Model):
    product_name = models.CharField(max_length=50)
    product_price = models.PositiveIntegerField()
    product_description = models.CharField(max_length=200)


class Spealist(models.Model):
    name_specialist = models.CharField(max_length=200)
    lastName_specialist = models.CharField(max_length=200)
    cc_specialist = models.PositiveIntegerField()
    phone_specialist = models.PositiveIntegerField()
    adress_specialist = models.TextField()
    email_specialist = models.TextField()


class TipeService(models.Model):
    name_service = models.CharField(max_length=100)
    is_enable = models.BooleanField()
    descripcion_service = models.TextField()
    price_service = models.PositiveIntegerField()
    id_specialist = models.ForeignKey(Spealist, on_delete=models.CASCADE)


class Service(models.Model):
    tipe_service = models.ForeignKey(TipeService, on_delete=models.CASCADE)
    id_user = models.PositiveBigIntegerField()
    date_register = models.DateTimeField()
    date_service = models.DateField()
    is_enable = models.BooleanField()
    hour_service = models.TimeField()
    name_pet = models.CharField(max_length=550)
    descripcion_service = models.TextField()
