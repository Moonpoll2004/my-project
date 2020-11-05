FROM node:12

WORKDIR /usr/src/app

RUN npm install

COPY . .

EXPOSE 2000

CMD [ "node", "server.js" ]