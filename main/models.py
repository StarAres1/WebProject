from django.db import models
from django.db.models.fields import CharField

class Cards(models.Model):
  title = models.CharField('Название', max_length=50)
  image = models.ImageField('Картинка', upload_to='images/', default='')
  description = models.TextField('Описание')
  video = models.URLField('Видео', default='')

  def __str__(self):
    return str(self.title)

  class Meta:
    verbose_name = "Карточка"
    verbose_name_plural = "Карточки"