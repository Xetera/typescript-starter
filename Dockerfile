FROM node:10

COPY package*.json .
RUN npm install --only=production
COPY ./ ./

# No need to build, running node ts
CMD npm start
