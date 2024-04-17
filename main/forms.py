from .models import Comment
from django.forms import ModelForm, TextInput, Textarea

class CommentForm(ModelForm):
  class Meta:
    model = Comment
    fields = ['text', 'author', 'cat']

    widgets = {
      'text': Textarea(attrs={
        'placeholer': 'Ваш комментарий',
        'class': 'line-form'
        }),
    }