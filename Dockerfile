FROM node:10-alpine

COPY package*.json ./
RUN npm install --only=production
COPY ./ ./

# No need to build, running ts node
CMD npm start
