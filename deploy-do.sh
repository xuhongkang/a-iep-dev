#!/bin/bash

# Install needed dependencies
sudo apt-get update
sudo apt-get install -y git docker
sudo service docker start
sudo git clone https://github.com/xuhongkang/aiep-app.git
sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Build and run the Docker containers
cd ./aiep-app
sudo docker-compose up --build -d