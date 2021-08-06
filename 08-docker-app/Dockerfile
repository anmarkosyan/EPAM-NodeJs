FROM ubuntu:20.04
WORKDIR /app
COPY package*.json ./

RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_14.x  | bash -
RUN apt-get -y install nodejs

RUN npm install
COPY . .

ENV PORT 8080
EXPOSE $PORT
CMD ["npm", "run", "dev"]









