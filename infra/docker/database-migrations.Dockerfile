FROM node:16

WORKDIR /app

RUN yarn global add prisma

COPY prisma ./prisma/

RUN prisma migrate deploy