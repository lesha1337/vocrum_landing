FROM node:10.16.3-alpine as build
RUN apk add npm
RUN npm i -g serve

ADD ./build /src
WORKDIR /src/build

EXPOSE 5000
CMD ["serve", "-s"]