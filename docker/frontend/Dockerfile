FROM node:16-alpine AS builder

COPY . ./

RUN npm ci
RUN npm run build

FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder ./dist/ /var/www/html/
