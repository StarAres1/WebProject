from django.contrib.auth.forms import UserCreationForm
from author.models import User


class RegisterForm(UserCreationForm):
  class Meta(UserCreationForm.Meta):
    model = User
    fields = UserCreationForm.Meta.fields + ("first_name", "last_name", "email")