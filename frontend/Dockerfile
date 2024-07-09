FROM node:14.16.1 AS base

ENV NODE_ENV production

ENV DEBUG nodejs-docker-express:*

ADD . /app

WORKDIR /app

RUN npm install

RUN npm run build

CMD ["npm", "run", "start"]