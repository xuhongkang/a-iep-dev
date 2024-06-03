# Dockerfile for Next.js app

# Use the official Node.js image as a base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

CMD ["node", "dist/server.js"]
