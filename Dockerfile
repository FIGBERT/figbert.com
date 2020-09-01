FROM alpine as builder

WORKDIR /home/site
COPY . .

RUN /bin/ash -c "echo \"http://dl-cdn.alpinelinux.org/alpine/edge/testing\" >> /etc/apk/repositories" \
  && apk update \
  && apk upgrade \
  && apk --no-cache add zola \
  && zola build

FROM caddy:alpine

COPY --from=builder /home/site/public /usr/share/caddy
COPY ./Caddyfile /etc/caddy/Caddyfile

