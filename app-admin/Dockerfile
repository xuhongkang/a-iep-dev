# Use the official Node.js image as a base image
FROM node:22-alpine

ENV PORT=3001
ENV PAYLOAD_SECRET=d1b8a0cf8777070cad101e1d
ENV PAYLOAD_PUBLIC_SERVER_URL=http://app-admin:3001
ENV NEXT_PUBLIC_SERVER_URL=http://app-admin:3001
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

CMD ["node", "dist/server.js"]
