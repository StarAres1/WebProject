from .models import FeedBack
from django.forms import ModelForm

class FeedBackForm(ModelForm):
  class Meta:
    model = FeedBack
    fields = ['nick_name', 'title', 'text']