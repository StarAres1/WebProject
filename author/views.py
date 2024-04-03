from django.shortcuts import render

def auth(request):  
  return render(request, 'registration/login.html')

def reg(request):
  return render(request, 'registration/forma2.html')
