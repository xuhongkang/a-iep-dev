import os
from celery import Celery

CELERY_BROKER_URL = os.getenv('CELERY_BROKER_URL', 'redis://redis:6379/0')
CELERY_RESULT_BACKEND = os.getenv('CELERY_RESULT_BACKEND', 'redis://redis:6379/0')

app = Celery('app',  # Make sure this matches the app name
             broker=CELERY_BROKER_URL,
             backend=CELERY_RESULT_BACKEND)

app.conf.update(
    task_serializer='json',
    accept_content=['json'],
    result_serializer='json',
    timezone='UTC',
    enable_utc=True,
)

# Ensure the task module is imported
app.autodiscover_tasks(['app'])
