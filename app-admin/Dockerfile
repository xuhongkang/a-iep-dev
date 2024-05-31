FROM node:18-alpine as base

FROM base as builder

WORKDIR /app
COPY package*.json ./

COPY . .
RUN npm install
RUN npm build

FROM base as runtime

WORKDIR /app
COPY package*.json  ./

RUN yarn install
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/build ./build

EXPOSE 3000

CMD ["npm", "run dev"]