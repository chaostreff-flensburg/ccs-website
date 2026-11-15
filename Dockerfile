FROM node:26.13.1-slim@sha256:e6bedef217677b276c591795e169840edd9096dbf13f29df8ef8d1856b8820bc AS builder

# cache dependencies for future builds
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

# build site
ADD . .
RUN npm run build


# build nginx webserver
FROM nginx:1.31.8-alpine@sha256:fed7e14be83cbd2661a75cdc5b872d936cf155d46c327084d30b8df19ae88d72

EXPOSE 80

ADD ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/_site /var/www/html
