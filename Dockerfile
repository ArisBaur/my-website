FROM node:16.3.0-alpine

WORKDIR /app
COPY app/package.json /app
RUN npm install
COPY app/ /app/
CMD ["node", "server.js"]
EXPOSE 8080
