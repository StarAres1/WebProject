from django.urls import path
from . import views

urlpatterns = [   
    path('', views.auth, name='author'),
    path('reg/', views.reg, name='reg')
]