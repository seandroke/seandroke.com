FROM mongo:latest AS base

ENV MONGO_INITDB_ROOT_USERNAME root

ENV MONGO_INITDB_ROOT_PASSWORD rootpassword

WORKDIR /data

ADD data.js .
ADD seeder.js .

EXPOSE 27017

CMD ["mongod"]