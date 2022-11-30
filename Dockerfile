FROM node:18-alpine
WORKDIR /hk-app
COPY . .
RUN npm install --production
CMD ["node", "server.prod.js"]
EXPOSE 8080