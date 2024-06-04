from fastapi import APIRouter, Depends
from app.models.item import Item
from app.dependencies import public_cors_dependency
router = APIRouter()

@router.get("/", dependencies=[Depends(public_cors_dependency)])
def read_root():
    return {"message": "This is a public endpoint"}
