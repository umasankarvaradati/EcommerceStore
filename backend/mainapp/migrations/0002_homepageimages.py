# Generated by Django 5.1.6 on 2025-02-20 09:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='HomePageImages',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('image', models.ImageField(upload_to='products/')),
                ('category', models.CharField(max_length=100)),
            ],
        ),
    ]
