from rest_framework import viewsets    
from .serializers import ServiceSerializer, SpecialistsSerializer, OptionsSerializer     
from .models import Service, Specialists, Options  


class ServiceViewSet(viewsets.ModelViewSet):    
    """    
    API endpoint that allows users to be viewed or edited.    
    """    
    queryset = Service.objects.all()    
    serializer_class = ServiceSerializer



class SpecialistsViewSet(viewsets.ModelViewSet):
    """    
    API endpoint that allows users to be viewed or edited.    
    """      
    queryset = Specialists.objects.all()    
    serializer_class = SpecialistsSerializer


class OptionsViewSet(viewsets.ModelViewSet):
    """    
    API endpoint that allows users to be viewed or edited.    
    """      
    queryset = Options.objects.all()    
    serializer_class = OptionsSerializer