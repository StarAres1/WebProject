from django.urls import path
from . import views

urlpatterns = [    
    path('', views.index, name='home'),
    path('description/<int:object_id>/', views.description, name='description'),
    path('new/', views.new, name='new'),
    path('add_comment/', views.add_comment, name='add_comment'),
    path('get_new_comments/', views.GetNewComments.as_view(), name='get_new_comments')
    
]