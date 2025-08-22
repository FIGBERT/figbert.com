FROM alpine AS builder
WORKDIR /home/site
COPY . .
RUN apk add --no-cache --repository https://dl-cdn.alpinelinux.org/alpine/edge/community/ zola \
  && zola build

FROM caddy:alpine
COPY --from=builder /home/site/public /usr/share/caddy
COPY ./Caddyfile /etc/caddy/Caddyfile
