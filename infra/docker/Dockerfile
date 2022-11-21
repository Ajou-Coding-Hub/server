FROM node:16 AS builder

# Create app directory
WORKDIR /app

COPY package.json yarn.lock ./
COPY prisma ./prisma/

# Install app dependencies
RUN yarn install

COPY . .

RUN yarn run prisma:generate

RUN yarn run build


FROM node:16

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/dist ./dist

# Is there any better way?
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000
# CMD [ "yarn", "run", "start:prod" ]
