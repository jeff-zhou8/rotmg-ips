
# Realm of the Mad God IP Tool

This project is a simple tool for listing and copying IP addresses of various servers used in the game **Realm of the Mad God**. It uses a Node.js backend with Express to serve static files and handle API routes, and a frontend to display server information and allow users to copy server IPs to their clipboard.

## Features

- **Search Functionality**: Quickly filter servers by name using the search input.
- **Clipboard Copy**: Easily copy server IPs by clicking on the respective button.
- **Dark Theme**: A modern dark theme using shades of black, grey, and accents of pink and yellow.

## Project Structure

- **Backend**: The backend serves the static frontend files and handles API requests for server information.
- **Frontend**: The frontend displays server information in a visually appealing way, with options to filter and copy server IPs.

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/realm-of-the-mad-god-ip-tool.git
   ```

2. Install dependencies for both the backend and frontend:
   ```bash
   cd backend
   npm install

   cd ../frontend
   npm install
   ```

3. Start the backend:
   ```bash
   cd backend
   npm start
   ```

4. Access the application by navigating to `http://localhost:3000`.

## Deployment

The project is designed to be deployed on Railway. The Dockerfile handles installing dependencies and running both the backend and frontend. The backend serves the static frontend files.

Ensure that the correct port is used (process.env.PORT or 3000) when deploying to Railway.

## Contributing

Feel free to submit issues or pull requests for any bugs or improvements.

## License

This project is licensed under the ISC License.
