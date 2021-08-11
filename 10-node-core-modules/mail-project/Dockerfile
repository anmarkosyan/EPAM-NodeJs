FROM node:14.17-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .

ENV PORT 4000
EXPOSE $PORT
CMD npm run dev
