FROM alpine as builder

WORKDIR /home/site
COPY . .

RUN /bin/ash -c "echo \"http://dl-cdn.alpinelinux.org/alpine/edge/community\" >> /etc/apk/repositories" \
  && apk update \
  && apk upgrade \
  && apk --no-cache add zola \
  && zola build

FROM nginx:alpine

COPY --from=builder /home/site/public /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf

