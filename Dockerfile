FROM node:10.15.3-alpine

RUN mkdir /myapp
WORKDIR /myapp

COPY . /myapp

RUN npm install
RUN npm run build
