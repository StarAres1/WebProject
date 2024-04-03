from django.shortcuts import render

from author.forms import RegisterForm
from django.views.generic.edit import FormView

def auth(request):  
  return render(request, 'registration/login.html')

class RegisterView(FormView):
  form_class = RegisterForm
  template_name = 'registration/forma2.html'
  success_url = '/'
  def form_valid(self, form):
    form.save()
    return super().form_valid(form)
  
