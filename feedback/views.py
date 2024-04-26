from django.shortcuts import render, redirect
from .forms import FeedBackForm
from django.conf import settings
import telegram_send

def feedback(request):  
  error = ''
  if request.method == 'POST':
    form = FeedBackForm(request.POST)    
    if form.is_valid():
      form.save()
      
      message = f"В системы зарегистрировано новое обращение:\n\nИмя: {form.cleaned_data['nick_name']}\nТема: {form.cleaned_data['title']}\nСообщение: {form.cleaned_data['text']}"
      telegram_send.send(messages = [message])
      
      return redirect('../')
    else:
      print("Не получилось отправить форму")
      error = form.errors    

      
  form = FeedBackForm()
  return render(request, 'main/feedback.html', {'form': form, 'error': error})
