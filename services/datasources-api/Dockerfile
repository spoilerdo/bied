ARG SERVICE="./services/datasources-api"

FROM node:12 as base
ARG SERVICE

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN chown -R node:node .

USER node

COPY --chown=node:node $SERVICE/package.json .
COPY --chown=node:node $SERVICE/package-lock.json .


RUN npm ci
COPY --chown=node:node $SERVICE/ .

FROM base as dev
CMD ["npm", "run", "start:dev"]

FROM base as build

WORKDIR /usr/src/app

RUN npm run build

FROM build
WORKDIR /usr/src/app

EXPOSE 3000

CMD [ "node", "dist/main.js" ]