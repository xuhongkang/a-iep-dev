#!/bin/bash

# Install needed dependencies
sudo yum update
sudo yum install docker
sudo service docker start 
sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo yum install -y nodejs nginx python3 python3-pip 
npm install -g pm2 yarn

# Build and run the Docker containers
sudo docker-compose build
sudo docker-compose up -d

# Optionally, renew Let's Encrypt certificates
# sudo apt-get install -y certbot
# sudo certbot --nginx -d a-iep-dev.com -d www.a-iep-dev.com
