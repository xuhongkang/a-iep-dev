# Dockerfile for Next.js Application

# Step 1: Use the official Node.js 18 image as the base image
FROM node:18-alpine AS builder

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the Next.js application
RUN npm run build

# Step 7: Install serve to serve the production build
RUN npm install -g serve

# Step 8: Expose the port the app runs on
EXPOSE 3000

# Step 9: Start the application
CMD ["serve", "-s", "out"]