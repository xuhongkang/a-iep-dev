#!/bin/bash
# List of required environment variables
required_env_vars="DOMAIN MONGO_INITDB_ROOT_USERNAME MONGO_INITDB_ROOT_PASSWORD PAYLOAD_SECRET ASTRA_DB_APPLICATION_TOKEN ASTRA_DB_ENDPOINT ASTRA_DB_NAMESPACE"

# Function to prompt for environment variables
prompt_for_env_var() {
  var_name=$1
  var_value=""

  # Check if the environment variable is already set
  eval "var_value=\${$var_name}"
  if [ -z "$var_value" ]; then
    # Prompt for the environment variable if not set
    echo -n "Enter value for $var_name: "
    read var_value
    export $var_name="$var_value"
  else
    echo "$var_name is already set to $var_value"
  fi
}

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
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin certbot gettext-base
sudo service docker start

# Configure Environment Variables
# Iterate through the list of required environment variables
for var in $required_env_vars; do
  prompt_for_env_var "$var"
done

# Print the values to confirm
echo "Final values of required environment variables:"
for var in $required_env_vars; do
  eval "echo $var=\${$var}"
done

# Runs certbot to use Let's Encrypt to generate ssl certificates for the site
sudo certbot certonly --standalone -d a-iep.org -d $DOMAIN www.$DOMAIN

envsubst '${DOMAIN}' < ./nginx/nginx.conf.template > ./nginx/nginx.conf

# Build and run the Docker containers
cd ./aiep-app
sudo docker-compose up --build -d