#!/bin/bash

# Install needed dependencies
sudo yum update
sudo yum install -y git docker
sudo git clone https://github.com/xuhongkang/aiep-app.git
sudo service docker start 
sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Build and run the Docker containers
cd ./aiep-app
sudo docker-compose up --build -d

## To rebuild
sudo docker-compose down
sudo docker-compose up --build -d


# Optionally, renew Let's Encrypt certificates
# sudo apt-get install -y certbot
# sudo certbot --nginx -d a-iep-dev.com -d www.a-iep-dev.com
