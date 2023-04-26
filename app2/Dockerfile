FROM node:18-alpine3.16 as base

RUN mkdir /app
WORKDIR /app
COPY package*.json /app/
RUN npm ci

COPY . /app

FROM base as dev
CMD ["npm", "run", "dev"]