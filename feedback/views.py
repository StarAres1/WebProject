from django.shortcuts import render, redirect
from .forms import FeedBackForm
from django.conf import settings
import telegram
import asyncio

my_token = '7052771626:AAEctpbPb5XlgBGraDnsRQuuGP1a5xZaBLQ'
my_chat_id = 1990255654
my_chat_id1 = -4144925687


async def send(msg, chat_id, token=my_token):  
  bot = telegram.Bot(token=token)
  await bot.sendMessage(chat_id=chat_id, text=msg)
  print('Message Sent!')
  
def feedback(request):  
  error = ''
  if request.method == 'POST':
    form = FeedBackForm(request.POST)    
    if form.is_valid():
      form.save()
      
      message = f"В системы зарегистрировано новое обращение:\n\nИмя: {form.cleaned_data['nick_name']}\nТема: {form.cleaned_data['title']}\nСообщение: {form.cleaned_data['text']}"

      asyncio.run(send(msg=message, chat_id=my_chat_id, token=my_token))
      asyncio.run(send(msg=message, chat_id=my_chat_id1, token=my_token))
      
      return redirect('../')
    else:
      print("Не получилось отправить форму")
      error = form.errors    

      
  form = FeedBackForm()
  return render(request, 'main/feedback.html', {'form': form, 'error': error})
