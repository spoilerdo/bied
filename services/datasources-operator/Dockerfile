ARG SERVICE="./services/datasources-operator"

FROM node:12-slim as base
# Reuse build-arg
ARG SERVICE

# Set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN chown -R node:node .

USER node

WORKDIR /usr/src/app

COPY $SERVICE/package.json .
COPY $SERVICE/package-lock.json .

RUN npm ci

COPY --chown=node:node $SERVICE/ .

FROM base as dev
CMD ["npm", "start"]

# Buid environment (production only)
FROM base as build

WORKDIR /usr/src/app

RUN npm run build

### STAGE 3: API ###
FROM build
WORKDIR /usr/src/app

CMD [ "node", "dist/main.js" ]
