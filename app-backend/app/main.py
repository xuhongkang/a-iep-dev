from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .tasks import long_running_task
from celery.result import AsyncResult

app = FastAPI(root_path='/api')

origins = [
    "https://a-iep.org",
    "https://www.a-iep.org",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], #Change for testing
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/enqueue")
def enqueue_task(param: str):
    result = long_running_task.delay(param)
    return {"task_id": result.id}

@app.get("/status/{task_id}")
def get_status(task_id: str):
    result = AsyncResult(task_id)
    return {"task_id": task_id, "status": result.state, "result": result.result if result.ready() else None}