FROM gradle:6.9-jdk11 AS base

ADD . /app

WORKDIR /app

RUN gradle wrapper

RUN chmod +x gradlew

CMD ["./gradlew", "bootRun"]