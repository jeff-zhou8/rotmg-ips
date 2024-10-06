FROM node:14-alpine

WORKDIR /app

COPY package.json ./
RUN npm install --production

COPY . .

WORKDIR /app/backend
RUN npm install

WORKDIR /app/frontend
RUN npm install

WORKDIR /app/backend
CMD ["npm", "start"]
