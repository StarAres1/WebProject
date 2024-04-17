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

class Comment(models.Model):  
  text = models.TextField('Текст комментария')
  author = models.CharField('Автор', max_length=50)  
  time = models.DateTimeField('Время', auto_now_add=True)

  cat = models.ForeignKey(Cards, on_delete=models.CASCADE, null = True)

  class Meta:
    verbose_name = "Комментарий"
    verbose_name_plural = "Комментарии"