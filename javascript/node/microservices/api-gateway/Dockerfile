#FROM node:8-alpine
FROM node:18.16.0-alpine

RUN apk add --no-cache tini
RUN apk add --no-cache curl

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/
RUN yarn --pure-lockfile && yarn cache clean

COPY src /usr/src/app/src/
COPY server.js /usr/src/app/

EXPOSE 8080
USER root


ENTRYPOINT ["/sbin/tini", "--"]
CMD [ "node", "server" ]
