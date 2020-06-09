#!/usr/bin/env bash

if type minikube 2> /dev/null; then
  eval $(minikube docker-env -p s66 -u)
fi

# Get root path
ROOT_PATH=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )/..

# Build libraries and create mount string
kip build -s datasources-api

# Inject project in local cluster
telepresence \
  --swap-deployment datasource-api \
  --docker-run \
    -v $ROOT_PATH/src:/usr/src/app/src \
    -v /var/run/docker.sock:/var/run/docker.sock \
    eu.gcr.io/s66-2-271821/datasources-api:latest \
    npm run start:dev