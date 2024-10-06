# Use the official Node.js image
FROM node:18-alpine

# Set working directory for backend
WORKDIR /app/backend

# Copy backend package.json and install backend dependencies
COPY ./backend/package*.json ./backend/
RUN npm install --prefix ./backend

# Copy all backend files
COPY ./backend ./backend/

# Set working directory for frontend
WORKDIR /app/frontend

# Copy frontend package.json and install frontend dependencies
COPY ./frontend/package*.json ./frontend/
RUN npm install --prefix ./frontend

# Copy frontend static files to the backend public directory
WORKDIR /app/backend
COPY ./frontend/public ./public/

# Expose port 3000 (Railway dynamically assigns a port)
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
