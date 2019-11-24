# Dockerfile for C4C Frontend 

FROM node:lts-alpine

WORKDIR /app
# to copy both package.json and package-lock.json
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build
CMD ["npm", "run", "serve"]