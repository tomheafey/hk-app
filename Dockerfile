FROM node:18-alpine
WORKDIR /hk-app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 3000