# Generated by Django 5.0 on 2023-12-29 14:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Academicdepartment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('deptname', models.CharField(max_length=260)),
                ('deptcode', models.CharField(max_length=260)),
                ('deptstatus', models.IntegerField(default=1)),
            ],
        ),
    ]
