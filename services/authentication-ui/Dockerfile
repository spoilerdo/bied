ARG SERVICE="./services/authentication-ui"

#
# Node modules sta
#
FROM node:10 as modules
# Reuse build-arg
ARG SERVICE

WORKDIR /usr/src/app
RUN chown -R node:node .

USER node

COPY --chown=node:node $SERVICE/package.json .
COPY --chown=node:node yarn.lock .

RUN yarn install --pure-lockfile --no-progress

#
# Base stage
#
FROM node:10 as base
# Reuse build-arg
ARG SERVICE
WORKDIR /usr/src/app

COPY --from=modules /usr/ /usr/
COPY $SERVICE/ .

#
# Dev environment
#
FROM base as dev
WORKDIR /usr/src/app

# Reuse build-arg
ARG SERVICE
CMD ["yarn", "start"]

#
# Builder stage
#
FROM base as builder
ARG SERVICE

WORKDIR /usr/src/app

ARG configuration=production

## Build the angular app in production mode and store the artifacts in dist folder
RUN yarn build --configuration $configuration

#
# STAGE 2: Setup
#
FROM nginx:1.15-alpine
# Reuse build-arg
ARG SERVICE

## Copy our default nginx config
COPY $SERVICE/nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx index page
RUN rm -f /usr/share/nginx/html/index.html

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]