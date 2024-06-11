FROM node:22-alpine

WORKDIR /home/node/app
COPY package*.json ./
RUN npm install

ARG DOMAIN
ENV NEXT_PUBLIC_DOMAIN=${DOMAIN}
ENV NODE_ENV=production
COPY . .
RUN npm run build

EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]

