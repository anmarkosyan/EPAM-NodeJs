FROM node:14.17
#FROM ubuntu:20.04

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .

EXPOSE 8080
CMD ["npm", "run", "dev"]








