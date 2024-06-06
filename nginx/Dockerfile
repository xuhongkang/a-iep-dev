# Dockerfile for NGINX

# Use the official NGINX image as a base image
FROM nginx:latest

# Install envsubst
RUN apt-get update && apt-get install -y gettext-base

# Copy Nginx configuration template
COPY nginx.conf.template /etc/nginx/nginx.conf.template

# Substitute environment variables and generate the final Nginx configuration
RUN envsubst '${DOMAIN} ${WWW_DOMAIN}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

EXPOSE 80