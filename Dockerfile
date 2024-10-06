# Use official Node.js image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Clear NPM cache before installing
RUN npm cache clean --force

# Copy root-level package.json and lock file (if necessary)
COPY package.json package-lock.json ./

# Install general dependencies
RUN npm install --production

# Copy backend files
WORKDIR /app/backend
COPY ./backend/package.json ./backend/package-lock.json ./backend/ .  # Ensure server.js and all backend files are copied
RUN npm install --production

# Install frontend dependencies and copy static assets
WORKDIR /app/frontend
COPY ./frontend/package.json ./frontend/package-lock.json ./frontend/ .  # Ensure frontend files are copied
RUN npm install --production

# Copy the frontend public folder to the backend for serving static files
COPY ./frontend/public /app/backend/public

# Set the working directory back to the backend for serving
WORKDIR /app/backend

# Expose the port for the backend
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
