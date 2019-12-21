FROM node:12-alpine

COPY package*.json ./
RUN yarn install
COPY ./ ./

# No need to build, running ts node
CMD yarn run start
