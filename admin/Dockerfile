FROM node:20-alpine

WORKDIR /admin
COPY package*.json ./

RUN npm install
COPY --from=builder /dist ./dist
COPY --from=builder /build ./build

EXPOSE 3001

CMD ["node", "dist/server.js"]
