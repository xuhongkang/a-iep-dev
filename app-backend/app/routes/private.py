from fastapi import APIRouter, Depends
from app.models.item import Item
from app.dependencies import private_cors_dependency
import requests

router = APIRouter()

@router.post("/login/", dependencies=[Depends(private_cors_dependency)])
def user_login(email: str, password: str):
    url = 'http://a-iep.com/cms/api/users/login'
    headers = {'Content-Type': 'application/json'}
    data = {
        'email': email,
        'password': password,
    }
    response = requests.post(url, headers=headers, json=data)
    return response.json()

@router.post("/signup/", dependencies=[Depends(private_cors_dependency)])
def user_signup(email: str, password: str):
    url = 'http://a-iep.com/cms/api/users/login'
    headers = {'Content-Type': 'application/json'}
    data = {
        'email': email,
        'password': password,
    }
    response = requests.post(url, headers=headers, json=data)
    return response.json()