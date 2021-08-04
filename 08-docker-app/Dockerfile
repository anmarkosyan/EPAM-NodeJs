FROM node:14.17
#FROM ubuntu:20.04

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ENV PORT 8080
EXPOSE $PORT
CMD ["npm", "run", "dev"]








