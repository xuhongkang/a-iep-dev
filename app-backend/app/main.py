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

class LoginRequest(BaseModel):
    email: str
    password: str

@app.post("/login")
def user_login(login_request: LoginRequest):
    url = 'http://app-admin:3000/cms/api/users/login'
    headers = {'Content-Type': 'application/json'}
    data = login_request.dict()
    response = requests.post(url, headers=headers, json=data)

    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail=response.text)

    return response.json()
