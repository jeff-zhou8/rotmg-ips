# Use the official Node.js image
FROM node:14

# Set working directory for backend
WORKDIR /app/backend

# Copy backend package.json and install backend dependencies
COPY ./backend/package*.json ./
RUN npm install

# Copy all backend files
COPY ./backend .

# Set working directory for frontend
WORKDIR /app/frontend

# Copy frontend package.json and install frontend dependencies
COPY ./frontend/package*.json ./
RUN npm install

# Copy all frontend files
COPY ./frontend .

# Set working directory back to backend
WORKDIR /app/backend

# Expose the application's port
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
