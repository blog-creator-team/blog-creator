#!/usr/bin/env bash

yarn install
yarn build

aws s3 cp ./dist/assets s3://blog-creator/assets --recursive --acl public-read
aws s3 cp ./dist s3://blog-creator/app --exclude "assets" --recursive --acl public-read
