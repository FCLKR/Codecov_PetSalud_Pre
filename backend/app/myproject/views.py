from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import HttpResponse, JsonResponse
from .models import Service, TipeService, Spealist
from datetime import datetime
import json
from datetime import datetime


def hola_mundo(request):
    return HttpResponse("¡Hola mundo desde Django en Docker!")

def tipe_service(request):
    if request.method == 'GET':
        all_tipeServices = list(TipeService.objects.filter(is_enable=1).values())
        return JsonResponse({'tipeServices' : all_tipeServices})

def get_dates(request):
    if request.method == 'GET':
        all_dates = list(Service.objects.filter(is_enable=1).values_list('date_service', flat=True))
        return JsonResponse(all_dates, safe=False)


def get_specialist(request):
    if request.method == 'GET':
        all_specialist = list(Spealist.objects.all().values())
        return JsonResponse({'specialist': all_specialist})


@ensure_csrf_cookie
def registerService(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        servicio = Service(
            date_service=data.get('fecha'),
            hour_service=data.get('hora'),
            descripcion_service=data.get('descripcion'),
            tipe_service_id=data.get('servicio'),
            is_enable=1,
            id_user=1,
            date_register = datetime.now(),
            name_pet = data.get('petName')
        )
        servicio.save()
        return JsonResponse({'message': 'Servicio registrado', 'id': servicio.id})
    return JsonResponse({'error': 'Método no permitido'}, status=405)


@ensure_csrf_cookie
def registerTipeService(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        servicioTipe = TipeService(
            name_service=data.get('nameServicio'),
            descripcion_service=data.get('descripcion'),
            price_service=data.get('priceService'),
            is_enable=1,
            id_specialist_id = data.get('specialist')
        )
        servicioTipe.save()
        return JsonResponse({'message': 'Tipo de Servicio registrado', 'id': servicioTipe.id})
    return JsonResponse({'error': 'Método no permitido'}, status=405)

def get_services(request):
    if request.method == 'GET':
        tipe_services = list(
            TipeService.objects.filter(is_enable=1).values(
                'id',
                'name_service',
                'descripcion_service',
                'price_service',
                'id_specialist_id'
            )
        )
    return JsonResponse({'tipeServices': tipe_services})
    
def editService(request, id):
    try:
        tipe_service = TipeService.objects.get(id=id, is_enable=1)
    except TipeService.DoesNotExist:
        return JsonResponse({'error': 'Tipo de servicio no encontrado'}, status=404)

    # Obtener un tipo de servicio (para la pantalla de edición)
    if request.method == 'GET':
        data = {
            'id': tipe_service.id,
            'name_service': tipe_service.name_service,
            'descripcion_service': tipe_service.descripcion_service,
            'price_service': tipe_service.price_service,
            'id_specialist_id': tipe_service.id_specialist_id
        }
        return JsonResponse(data)

    if request.method in ['PUT', 'POST']:
        body = json.loads(request.body)

        tipe_service.name_service = body.get('name_service', tipe_service.name_service)
        tipe_service.descripcion_service = body.get('descripcion_service', tipe_service.descripcion_service)
        tipe_service.price_service = body.get('price_service', tipe_service.price_service)
        tipe_service.id_specialist_id = body.get('id_specialist_id', tipe_service.id_specialist_id)

        tipe_service.save()

        return JsonResponse({'message': 'Tipo de servicio actualizado correctamente'})

    return JsonResponse({'error': 'Método no permitido'}, status=405)

def get_appointment(request):
    if request.method == 'GET':
        services = Service.objects.filter(is_enable=True).select_related('tipe_service')
        data = []
        for s in services:
            data.append({
                'tipe_service' : s.tipe_service.name_service,
                'id_user' : s.id_user,
                'date_register': datetime.strftime(s.date_register, '%d-%m-%Y %H:%M:%S'),
                'date_service': s.date_service,
                'is_enable': s.is_enable,
                'hour_service': s.hour_service,
                'name_pet': s.name_pet,
                'descripcion_service' : s.descripcion_service
            })
        return JsonResponse({'appointment': data})
    
