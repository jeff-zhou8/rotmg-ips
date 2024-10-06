# Use official Node.js image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Clear NPM cache before installing
RUN npm cache clean --force

# Copy root-level package.json and package-lock.json
COPY package.json package-lock.json ./

# Install root dependencies
RUN npm install --production

# Copy backend files and install backend dependencies
WORKDIR /app/backend
COPY backend/package.json backend/package-lock.json ./
COPY backend/ .  # Copy the backend folder contents
RUN npm install --production

# Copy frontend files and install frontend dependencies
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
COPY frontend/ .  # Copy the frontend folder contents
RUN npm install --production

# Copy frontend public folder into backend's public directory
COPY frontend/public /app/backend/public/

# Return to backend directory for serving the application
WORKDIR /app/backend

# Expose the application on port 3000
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
