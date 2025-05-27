from django.db import migrations

def add_default_categories(apps, schema_editor):
    Category = apps.get_model('category', 'Category')
    default_categories = [
        "All", "Card", "Money", "Glasses", "Charger", "Key",
        "Clothes", "Phone", "PC", "Backpack", "Umbrella", "School Stuff", "Others"
    ]
    for name in default_categories:
        Category.objects.get_or_create(name=name)

class Migration(migrations.Migration):

    dependencies = [
        ('category', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(add_default_categories),
    ]
