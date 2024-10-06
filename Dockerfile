# Use official Node.js image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Clear NPM cache before installing
RUN npm cache clean --force

# Copy root-level package.json and lock file
COPY package.json package-lock.json ./

# Install general dependencies
RUN npm install --production

# Copy backend files into /app/backend
WORKDIR /app/backend
COPY backend/ .  # Copy the entire backend folder into /app/backend
RUN npm install --production

# Copy frontend files into /app/frontend
WORKDIR /app/frontend
COPY frontend/ .  # Copy the entire frontend folder into /app/frontend
RUN npm install --production

# Copy frontend static files into backend's public directory
COPY frontend/public /app/backend/public/

# Set the working directory back to the backend for serving
WORKDIR /app/backend

# Expose the port for the backend
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
