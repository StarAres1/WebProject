from django.shortcuts import render
from . models import Cards

def index(request):
  cards = Cards.objects.all()
  return render(request, 'main/index.html', {'cards': cards})

def description(request, object_id):
  object = Cards.objects.get(id=object_id)
  return render(request, 'main/page gow.html', {'object': object})

def new(request):
  return render(request, 'main/new.html')