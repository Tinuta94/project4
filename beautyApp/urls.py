from django.urls import include, path                    
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
#this is like app.use from server.js
router.register('services', views.ServiceViewSet)
router.register('specialists', views.SpecialistsViewSet)
router.register('options', views.OptionsViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
]