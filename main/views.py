from django.shortcuts import render, redirect
from . models import Cards, Comment
from .forms import CommentForm

def index(request):
  cards = Cards.objects.all()
  return render(request, 'main/index.html', {'cards': cards})

def description(request, object_id):
  error = ''
  if request.method == 'POST':
    form = CommentForm(request.POST)
    form.fields['author'].initiale_value = request.user.username
    if form.is_valid():
      form.save()
      line = '../' + str(object_id)
      return redirect(line)
    else:
      error = form.errors
      
  form = CommentForm()
  
  object = Cards.objects.get(id=object_id)
  сomments = Comment.objects.filter(cat=object)
  return render(request, 'main/page gow.html', {
    'object': object, 
    'comments': сomments, 
    'form': form,
    'error': error
  })

def new(request):
  return render(request, 'main/new.html')