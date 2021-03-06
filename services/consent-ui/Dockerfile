# FROM node:10 as modules

# WORKDIR /usr/src/app
# RUN chown -R node:node .

# USER node

# COPY --chown=node:node package.json .
# COPY --chown=node:node package-lock.json .

# RUN npm install

# FROM node:10 as base
# WORKDIR /usr/src/app

# COPY --from=modules /usr/ /usr/
# COPY . .

# # Dev environment
# FROM base as dev
# CMD ["npm", "start"]

# # We label our stage as ‘builder’
# FROM base as builder

# WORKDIR /usr/src/app

# ARG configuration=production

# ## Build the angular app in production mode and store the artifacts in dist folder
# RUN $(npm bin)/ng build --configuration $configuration

# ### STAGE 2: Setup ###

# FROM nginx:1.15-alpine

# ## Copy our default nginx config
# COPY nginx/default.conf /etc/nginx/conf.d/

# ## Remove default nginx website
# RUN rm -rf /usr/share/nginx/html/*

# ## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
# COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

ARG SERVICE="./services/consent-ui"

#
# Node modules stage
#
FROM node:10 as modules
# Reuse build-arg (ARG's need to be set every build stage.)
ARG SERVICE

WORKDIR /usr/src/app
RUN chown -R node:node .

USER node

COPY --chown=node:node $SERVICE/package.json .
COPY --chown=node:node $SERVICE/package-lock.json .

RUN npm ci

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
CMD ["npm", "start"]

#
# Builder stage
#
FROM base as builder
ARG SERVICE
# Note: BASE_HREF must have a trailing '/' !!!
ARG BASE_HREF="/"

WORKDIR /usr/src/app

ARG configuration=development

## Build the angular app in production mode and store the artifacts in dist folder
RUN npm run build -- --configuration $configuration

#
# STAGE 2: Setup
#
FROM nginx:1.15-alpine
# Reuse build-arg
ARG SERVICE

## Copy our default nginx config
COPY $SERVICE/nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80
