FROM node:12 as modules

WORKDIR /usr/src/app

RUN echo 'deb http://dl.google.com/linux/chrome/deb/ stable main' > /etc/apt/sources.list.d/chrome.list

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -

RUN set -x \
  && apt-get update \
  && apt-get install -y google-chrome-stable openjdk-8-jre

RUN export CHROME_BIN="/usr/bin/google-chrome"