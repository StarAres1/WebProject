from django.shortcuts import render, redirect
from .models import Cards, Comment
from .forms import CommentForm
from django.http import JsonResponse

import json
from django.http import HttpResponse
from django.views import View
from django.template.loader import render_to_string

from datetime import datetime
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


class GetNewComments(View):


  
  def post(self, request):
    сomments = Comment.objects.filter(cat=request.POST.get('id_cat')).order_by('-time')

    result = request.POST.get('time').strip()   

    mas = Comment.objects.filter(time__gt=parse(result, languages=['ru'])).exclude(time=parse(result, languages=['ru']))
    print(mas)
    if len(mas) == 0:
      return JsonResponse({'mesage': "0"})
    else:
      mas_json = serializers.serialize('json', mas[1:])
      return JsonResponse({'mesage': "1", "mas": mas_json})

