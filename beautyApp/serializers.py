from rest_framework import serializers    
from .models import Service, Specialists, Options

class ServiceSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Service   
        fields = ['id', 'name', 'photo_url']

class SpecialistsSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Specialists    
        fields = ['id', 'name', 'photo_url', 'description', 'email', 'service']

class OptionsSerializer(serializers.ModelSerializer):  
    class Meta:     
        model = Options    
        fields = ['id', 'name', 'description', 'price', 'photo_url', 'service']        