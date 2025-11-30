from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('hola/', views.hola_mundo),
    path('tipe-services/', views.tipe_service),
    path('all-dates/', views.get_dates),
    path('registerService/', views.registerService),
    path('specialists/', views.get_specialist),
    path('registerTipeService/', views.registerTipeService),
    path('services/', views.get_services),
    path('services/<int:id>/', views.editService),
    path('appointment/', views.get_appointment)

]
