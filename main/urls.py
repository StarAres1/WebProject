from django.urls import path
from . import views

urlpatterns = [    
    path('', views.index, name='home'),
    path('description/<int:object_id>/', views.description, name='description'),
    path('new/', views.new, name='new')    
]