from django.urls import path, include
from author.views import RegisterView
from . import views


urlpatterns = [   
    path('', include("django.contrib.auth.urls")),
    path('reg/', RegisterView.as_view(), name='reg')
]