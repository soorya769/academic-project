# Generated by Django 5.0 on 2024-01-05 05:27

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('admin_master', '0007_academicsubject'),
    ]

    operations = [
        migrations.CreateModel(
            name='SubjectFore',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('classid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='admin_master.academicclass')),
                ('subjectid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='admin_master.academicsubject')),
            ],
        ),
    ]
