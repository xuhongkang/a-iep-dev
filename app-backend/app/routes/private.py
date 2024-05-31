from fastapi import APIRouter, Depends
from app.models.item import Item
from app.dependencies import private_cors_dependency

router = APIRouter()

@router.get("/", dependencies=[Depends(private_cors_dependency)])
def read_root():
    return {"message": "This is a private endpoint"}

@router.post("/items/", response_model=Item, dependencies=[Depends(private_cors_dependency)])
def create_item(item: Item):
    return item
