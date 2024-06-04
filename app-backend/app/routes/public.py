from fastapi import APIRouter, Depends
from app.models.item import Item
from app.dependencies import public_cors_dependency
import requests

router = APIRouter()

@router.get("/", dependencies=[Depends(public_cors_dependency)])
def read_root():
    return {"message": "This is a public endpoint"}

@router.post("/login/", dependencies=[Depends(public_cors_dependency)])
def login(email: str, password: str):
    url = 'http://a-iep-dev.com/cms/api/users/login'
    headers = {'Content-Type': 'application/json'}
    data = {
        'email': email,
        'password': password,
    }
    response = requests.post(url, headers=headers, json=data)
    return response.json()

@router.post("/signup/", dependencies=[Depends(public_cors_dependency)])
def create_item(item: Item):
    return item
