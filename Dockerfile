FROM node:18

WORKDIR /app

COPY server/package*.json ./
Run npm install

COPY server/ .

EXPOSE 3000

CMD ["node","server.js"]
