from .celery_config import app
import time

@app.task(name='app.tasks.long_running_task')
def long_running_task(param):
    # Simulate a long-running task
    time.sleep(6)  # Sleep for 6 seconds
    return f'Task completed with param: {param}'
