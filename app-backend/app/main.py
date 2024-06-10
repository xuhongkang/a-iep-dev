from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI(root_path='/api')

origins = [
    "https://www.a-iep.org",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/login")
def user_login(email: str, password: str):
    url = 'http://app-admin:3000/cms/api/users/login'
    headers = {'Content-Type': 'application/json'}
    data = {
        'email': email,
        'password': password,
    }
    response = requests.post(url, headers=headers, json=data)
    return {"message": response.json()}
