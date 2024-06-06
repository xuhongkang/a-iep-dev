#!/bin/bash

# Install needed dependencies
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the Docker repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

# Install Docker sub dependencies & certbot
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin certbot
sudo service docker start

# Configure Environment Variables
# List of required environment variables
required_env_vars=('DOMAIN', 'WWW_DOMAIN', 'MONGO_INITDB_ROOT_USERNAME', 'MONGO_INITDB_ROOT_PASSWORD', 'PAYLOAD_SECRET')

# Function to prompt for environment variables
prompt_for_env_var() {
  local var_name=$1
  local var_value

  # Check if the environment variable is already set
  if [ -z "${!var_name}" ]; then
    # Prompt for the environment variable if not set
    read -p "Enter value for $var_name: " var_value
    export $var_name=$var_value
  else
    echo "$var_name is already set to ${!var_name}"
  fi
}

# Iterate through the list of required environment variables
for var in "${required_env_vars[@]}"; do
  prompt_for_env_var "$var"
done

# Print the values to confirm
echo "Final values of required environment variables:"
for var in "${required_env_vars[@]}"; do
  echo "$var=${!var}"
done

# Runs certbot to use Let's Encrypt to generate ssl certificates for the site
#sudo certbot certonly --standalone -d a-iep.org -d $DOMAIN $WWW_DOMAIN

# Build and run the Docker containers
cd ./aiep-app
sudo docker-compose up --build -d