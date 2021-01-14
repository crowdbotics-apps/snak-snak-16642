# Generated by Django 2.2.2 on 2021-01-13 22:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0009_auto_20201216_2102'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='job_field',
            field=models.CharField(choices=[('agriculture', 'Agriculture'), ('business_and_administration', 'Business and Administration'), ('communications', 'Communications'), ('community_entertainment', 'Community & Entertainment'), ('education', 'Education'), ('emergency_services', 'Emergency Services'), ('government', 'Government'), ('health_wellness', 'Health & Wellness'), ('hospitality_travel', 'Hospitality & Travel'), ('law', 'Law'), ('medical', 'Medical'), ('sales', 'Sales'), ('science_technology', 'Science & Technology'), ('sports', 'Sports')], default=None, max_length=50, null=True),
        ),
    ]