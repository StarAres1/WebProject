from django.db import models

class FeedBack(models.Model):

  nick_name = models.CharField(max_length=50)
  title = models.CharField(max_length=100)
  text = models.TextField()

  def __str__(self):
    return str(self.title) + " " + str(self.nick_name)
  
  class Meta:
    verbose_name = "Обращение"
    verbose_name_plural = "Обращения"
