# Use the official Node.js image
FROM node:14

# Create and set the working directory for the backend
WORKDIR /app/backend

# Copy backend files and install dependencies
COPY ./backend/package*.json ./
RUN npm install

# Copy all other backend files
COPY ./backend .

# Expose the port
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
