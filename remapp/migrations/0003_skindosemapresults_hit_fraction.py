# Generated by Django 2.2 on 2019-11-12 14:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('remapp', '0002_skindosemapresults'),
    ]

    operations = [
        migrations.AddField(
            model_name='skindosemapresults',
            name='hit_fraction',
            field=models.DecimalField(blank=True, decimal_places=4, max_digits=16, null=True),
        ),
    ]