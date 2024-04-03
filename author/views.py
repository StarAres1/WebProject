from django.shortcuts import render

def auth(request):  
  return render(request, 'author/forma.html')

def reg(request):
  return render(request, 'author/forma2.html')
