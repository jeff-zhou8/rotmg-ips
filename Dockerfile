# Use the official Node.js image
FROM node:14

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

# Copy all frontend files, including public directory
COPY ./frontend ./frontend/

# Set working directory back to backend
WORKDIR /app/backend

# Expose the backend port
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
