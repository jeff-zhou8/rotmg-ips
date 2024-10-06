# Use official Node.js image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy root-level package.json and lock file (if necessary)
COPY package.json package-lock.json ./

# Install general dependencies
RUN npm install --production

# Copy backend files and install backend dependencies
WORKDIR /app/backend
COPY ./backend/package.json ./backend/package-lock.json ./
RUN npm install --production

# Install frontend dependencies and copy static assets
WORKDIR /app/frontend
COPY ./frontend/package.json ./frontend/package-lock.json ./
RUN npm install --production

# If there's no build step for the frontend, just copy the public folder
COPY ./frontend/public /app/backend/public

# Set the working directory back to the backend for serving
WORKDIR /app/backend

# Expose the port for the backend
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
