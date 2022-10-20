FROM node:alpine

WORKDIR /home/node/app/api

COPY ./api/ .

RUN npm ci

EXPOSE 3000

CMD ["nodejs", "index.mjs"]
