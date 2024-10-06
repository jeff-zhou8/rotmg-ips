# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory for the backend
WORKDIR /app/backend

# Copy backend package.json and install backend dependencies
COPY ./backend/package*.json ./
RUN npm install

# Copy all backend files
COPY ./backend .

# Set the working directory for the frontend
WORKDIR /app/frontend

# Copy frontend package.json and install frontend dependencies
COPY ./frontend/package*.json ./
RUN npm install

# Build the frontend
RUN npm run build

# Copy built frontend files to backend public directory
WORKDIR /app/backend
RUN cp -r ../frontend/build/* ./public/

# Expose the port for the backend
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
