from fastapi import APIRouter, Depends
from app.models.item import Item
from app.dependencies import public_cors_dependency
import requests

router = APIRouter()

@router.post("/login/", dependencies=[Depends(public_cors_dependency)])
def user_login(email: str, password: str):
    url = 'http://app-admin:3000/cms/api/users/login'
    headers = {'Content-Type': 'application/json'}
    data = {
        'email': email,
        'password': password,
    }
    response = requests.post(url, headers=headers, json=data)
    return response.json()