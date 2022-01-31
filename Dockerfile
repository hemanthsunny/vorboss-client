FROM node:16.13.2-alpine

WORKDIR /src

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
