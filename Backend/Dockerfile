FROM node:latest

WORKDIR /usr/src/backend-api

COPY ./ ./

RUN npm uninstall bcrypt

RUN npm install bcrypt

RUN npm install --only=dev

CMD ["/bin/bash"]