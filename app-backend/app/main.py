from fastapi import FastAPI, BackgroundTasks
from .tasks import long_running_task
from celery.result import AsyncResult

app = FastAPI()

@app.post("/enqueue")
def enqueue_task(param: str):
    task = long_running_task.delay(param)
    return {"task_id": task.id}

@app.get("/status/{task_id}")
def get_status(task_id: str):
    task_result = AsyncResult(task_id)
    return {"task_id": task_id, "status": task_result.state, "result": task_result.result if task_result.ready() else None}
