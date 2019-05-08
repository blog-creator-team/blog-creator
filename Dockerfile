FROM node:12.1.0-alpine

RUN mkdir /myapp
WORKDIR /myapp

COPY package.json /myapp/package.json
COPY yarn.lock /myapp/yarn.lock

RUN npm i -g yarn

RUN yarn install
