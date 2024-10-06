
# Use official Node.js image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Clear NPM cache before installing
RUN npm cache clean --force

# Copy root-level package.json and lock file
COPY package.json package-lock.json ./

# Install root-level dependencies
RUN npm install --production

# Copy backend files and install backend dependencies
WORKDIR /app/backend
COPY backend/ ./
RUN npm install --production

# Copy frontend files and install frontend dependencies
WORKDIR /app/frontend
COPY frontend/ ./
RUN npm install --production

# Move frontend public files into backend's public directory
WORKDIR /app/backend
RUN mkdir -p public
COPY --from=frontend /app/frontend/public ./public

# Expose the port for the backend
EXPOSE 8080

# Start the backend server
CMD ["npm", "start"]
