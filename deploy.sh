#!/bin/bash

# Pull latest changes from GitHub
git pull origin main

# Build and start Docker containers
sudo docker-compose down
sudo docker-compose build
sudo docker-compose up -d

# Clean up dangling images
sudo docker system prune -f
