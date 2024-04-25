from django.shortcuts import render, redirect
from .models import Cards, Comment
from .forms import CommentForm
from django.http import JsonResponse

import json
from django.http import HttpResponse
from django.views import View
from django.template.loader import render_to_string

from datetime import datetime, timedelta
from dateparser import parse
from django.core import serializers


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
  сomments = Comment.objects.filter(cat=object).order_by('-time')
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
  if request.method == "POST" and request.headers.get(
      'X-Requested-With') == 'XMLHttpRequest':
    form = CommentForm(request.POST)
    if form.is_valid():
      text_val = form.cleaned_data['text']
      author = form.cleaned_data['author']           

      form.save()
      time = str(Comment.objects.get(text = text_val).time).strip() 
      
      date_obj = datetime.strptime(time, '%Y-%m-%d %H:%M:%S.%f%z')

      months_ru = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

      date_obj += timedelta(hours=3)

      formatted_date = date_obj.strftime(f"%d {months_ru[date_obj.month - 1]} %Y г. %H:%M")
      return JsonResponse({
          "text": text_val,
          "author": author,
          "time": formatted_date,
      }, status=200)
    else:
      errors = form.errors
      print(errors)
      return JsonResponse(errors, status=400)

  return render(request, "../", {"form": form})


class GetNewComments(View):


  
  def post(self, request):
    сomments = Comment.objects.filter(cat=request.POST.get('id_cat')).order_by('-time')

    result = request.POST.get('time').strip()  

    mas = Comment.objects.filter(time__gt=parse(result, languages=['ru'])).exclude(time=parse(result, languages=['ru']))

    mas1 = []
    for comment in mas:
      time = str(comment.time).strip()
      date_obj = datetime.strptime(time, '%Y-%m-%d %H:%M:%S.%f%z')

      months_ru = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

      date_obj += timedelta(hours=3)

      formatted_date = date_obj.strftime(f"%d {months_ru[date_obj.month - 1]} %Y г. %H:%M")
      
      mas1.append({        
        'text': comment.text,
        'author': comment.author,
        'time': formatted_date
      })          
      
    if len(mas) == 1:      
      return JsonResponse({'message': "0"})
    else:      
      return JsonResponse({'message': "1", "mas": mas1[1:]})

