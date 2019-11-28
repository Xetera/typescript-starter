FROM node:12-alpine

COPY package*.json ./
RUN npm install
COPY ./ ./

# No need to build, running ts node
CMD npm start
