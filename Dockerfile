# Use the official Node.js image
FROM node:18-alpine

# Set working directory for backend
WORKDIR /app/backend

# Copy backend package.json and install backend dependencies
COPY ./backend/package*.json ./backend/
RUN npm install --prefix ./backend && npm audit fix --prefix ./backend --force

# Copy all backend files
COPY ./backend ./backend/

# Set working directory for frontend
WORKDIR /app/frontend

# Copy frontend package.json and install frontend dependencies
COPY ./frontend/package*.json ./frontend/
RUN npm install --prefix ./frontend && npm audit fix --prefix ./frontend --force

# Skip the frontend build step, assuming static files are in the public directory
# Copy static frontend files to the backend's public directory
WORKDIR /app/backend
COPY ./frontend/public ./public/

# Expose the backend port (for Railway)
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
