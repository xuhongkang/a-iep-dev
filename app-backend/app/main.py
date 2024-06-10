from fastapi import FastAPI
from app.routes import public, private

app = FastAPI(root_path="/api/")

# Include routers
app.include_router(public.router, prefix="/public", tags=["public"])
app.include_router(private.router, prefix="/private", tags=["private"])

@app.get("/")
def read_root():
    return {"message": "Hello World from FastAPI"}
