from django.shortcuts import render, redirect
from . models import Cards, Comment
from .forms import CommentForm
from django.http import JsonResponse

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


def add_comment(request):
  form = CommentForm()
  if request.method == "POST" and request.headers.get('X-Requested-With') == 'XMLHttpRequest':
      form = CommentForm(request.POST)
      if form.is_valid():
          text = form.cleaned_data['text']
          author = form.cleaned_data['author']            
        
          form.save()
          return JsonResponse({
            "text": text,
            "author": author,
            }, status=200)
      else:
          errors = form.errors
          print(errors)
          return JsonResponse(errors, status=400)   
  
  return render(request, "../", {"form": form})