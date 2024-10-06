# Use official Node.js image
FROM node:14-alpine

WORKDIR /app

# Copy root dependencies and install them
COPY package.json ./
RUN npm install --production

# Copy backend and frontend
COPY . .

WORKDIR /app/backend
RUN npm install

WORKDIR /app/frontend
RUN npm install

# Set working directory back to backend
WORKDIR /app/backend

# Expose port 3000
EXPOSE 3000

CMD ["npm", "start"]
