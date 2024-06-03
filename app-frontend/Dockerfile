FROM node:22-alpine

WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
ENV NODE_ENV=production
COPY . .
RUN npm run build

EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]

