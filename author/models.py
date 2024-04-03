from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import Group, Permission

class User(AbstractUser):
  groups = models.ManyToManyField(Group, related_name='myuser_groups')
  user_permissions = models.ManyToManyField(Permission, related_name='myuser_user_permissions')
