FROM node:20-alpine
FROM base as builder

WORKDIR /admin
COPY package*.json ./

RUN yarn install --production
COPY --from=builder /dist ./dist
COPY --from=builder /build ./build

EXPOSE 3001

CMD ["node", "dist/server.js"]
