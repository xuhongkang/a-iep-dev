FROM node:18.8-alpine as base

WORKDIR /admin
COPY package*.json yarn.lock ./

# Separate base image to handle dependencies
RUN npm install

FROM base as builder

COPY . .

# Build the application
RUN yarn build

FROM node:18.8-alpine as runtime

WORKDIR /admin

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

# Copy only production dependencies
COPY package*.json yarn.lock ./
RUN yarn install --production

# Copy built files from builder stage
COPY --from=builder /admin/dist ./dist
COPY --from=builder /admin/build ./build

EXPOSE 3001

CMD ["node", "dist/server.js"]
