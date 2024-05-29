#!/bin/bash

# Check if all environment variables are set
required_vars=(
  POSTGRES_PASSWORD
)

for var in "${required_vars[@]}"; do
  if [ -z "${!var}" ]; then
    echo "Error: $var is not set. Please configure it."
    missing_vars=true
  fi
done

if [ "$missing_vars" = true ]; then
  echo "One or more required environment variables are missing. Exiting."
  exit 1
fi

echo "All required environment variables are set."

# Install needed dependencies
sudo yum install docker
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo yum install nginx -y

# Start Docker Compose services
docker-compose -f /path/to/your/docker-compose.yml up -d

# Build and run frontend applications
cd /app-frontend
npm install
npm run build
npm start &

cd /app-admin
npm install
npm run build
npm start &

# Build and run backend applications
# cd /app-backend
# pip install -r requirements.txt
# uvicorn main:app --host 0.0.0.0 --port 8000 &

# cd /llm-service
# pip install -r requirements.txt
# uvicorn main:app --host 0.0.0.0 --port 8001 &

# Start NGINX
nginx -c /nginx.conf