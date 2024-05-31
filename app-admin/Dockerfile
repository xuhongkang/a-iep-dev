FROM node:22-alpine as base

FROM base as builder

WORKDIR /app
COPY package*.json ./

COPY . .
RUN npm install
RUN npm run build

FROM base as runtime

WORKDIR /app
COPY package*.json  ./

RUN npm install --production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/build ./build

EXPOSE 3001

CMD ["node", "dist/server.js"]