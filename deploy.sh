#!/bin/bash

# Update the system and install Docker
sudo yum update -y
sudo yum install -y docker

# Start the Docker service
sudo service docker start

# Add the ec2-user to the Docker group
sudo usermod -a -G docker ec2-user

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Set the permissions for Docker Compose
sudo chmod +x /usr/local/bin/docker-compose

# Stop and remove existing Docker containers and volumes
sudo docker-compose down -v

# Build and start Docker containers
sudo docker-compose build
sudo docker-compose up -d

# Clean up dangling images
sudo docker system prune -f
