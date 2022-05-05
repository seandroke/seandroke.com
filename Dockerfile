FROM node:14.16.1 as base
RUN apt-get update || : && apt-get install python -y

WORKDIR /src
ADD . .
EXPOSE 3000

ENV NODE_ENV=production
RUN npm install
RUN npm run build
CMD ["npm", "run", "start"]