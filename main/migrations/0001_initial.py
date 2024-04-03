# Generated by Django 5.0.2 on 2024-04-03 10:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cards',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='Название')),
                ('image', models.ImageField(default='', upload_to='images/', verbose_name='Картинка')),
                ('description', models.TextField(verbose_name='Описание')),
                ('video', models.URLField(default='', verbose_name='Видео')),
            ],
            options={
                'verbose_name': 'Карточка',
                'verbose_name_plural': 'Карточки',
            },
        ),
    ]
