FROM node:14.13.1-alpine3.11

WORKDIR /app

COPY node_modules ./node_modules
COPY package-lock.json ./package-lock.json
COPY package.json ./package.json
COPY src ./src

CMD node /app/src/server.js