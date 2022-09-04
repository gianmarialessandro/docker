FROM node

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

RUN mkdir -p /docker/html-js-node

COPY . /docker/html-js-node

CMD ["node", "/docker/html-js-node/server.js"]