from celery_config import app
import time

@app.task
def long_running_task(param):
    # Simulate a long-running task
    time.sleep(10)  # Sleep for 10 seconds
    return f'Task completed with param: {param}'