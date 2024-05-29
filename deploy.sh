#!/bin/bash

# Install needed dependencies
sudo yum install docker
sudo service docker start 
sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo yum install nodejs nginx -y

# Start Docker Compose services
docker-compose -f docker-compose.yml up -d

# Build and run frontend applications
cd ./app-frontend
npm install
npm run build
npm start &

cd ..

cd ./app-admin
npm install
npm run build
npm start &

cd ..

# Build and run backend applications
# cd /app-backend
# pip install -r requirements.txt
# uvicorn main:app --host 0.0.0.0 --port 8000 &

# cd /llm-service
# pip install -r requirements.txt
# uvicorn main:app --host 0.0.0.0 --port 8001 &

# Start NGINX
cp ./nginx/nginx.conf /usr/share/nginx/nginx.conf
service nginx restart