from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests

app = FastAPI(root_path='/api')

origins = [
    "https://a-iep.org",
    "https://www.a-iep.org",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UserAuthRequest(BaseModel):
    email: str
    password: str

@app.post("/login")
def user_login(login_request: UserAuthRequest):
    url = 'http://app-admin:3000/cms/api/users/login'
    headers = {'Content-Type': 'application/json'}
    data =     data = {
        'email': login_request.email,
        'password': login_request.password
    }
    response = requests.post(url, headers=headers, json=data)
    return response.json()

@app.post("/signup")
def user_signup(signup_request: UserAuthRequest):
    url = 'http://app-admin:3000/cms/api/users'
    headers = {'Content-Type': 'application/json'}
    data = {
        'email': signup_request.email,
        'password': signup_request.password,
        'role': 'user',
    }
    response = requests.post(url, headers=headers, json=data)
    return response.json()