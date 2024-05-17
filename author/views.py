from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate

from author.forms import RegisterForm
from django.views import View

def auth(request):  
  form = RegisterForm()
  return render(request, 'registration/login.html')

class RegisterView(View):
  template_name = 'registration/forma2.html'

  def get(self, request):
    context = {
      'form': RegisterForm()
    }
    return render(request, self.template_name, context)

  def post(self, request):
    form = RegisterForm(request.POST)

    if form.is_valid():
      form.save()
      username = form.cleaned_data.get('username')
      password = form.cleaned_data.get('password1')
      user = authenticate(username=username, password=password)
      login(request, user)
      return redirect("home")
    else:
      context = {
        'form': form
      }
      return render(request, self.template_name, context)
  
