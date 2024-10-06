const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'frontend/public' directory
app.use(express.static(path.join(__dirname, '../frontend/public')));

// API route example
app.get('/api', (req, res) => {
    res.json({ message: 'Backend API is running' });
});

// Route for server IP list
const serverRoutes = require('./routes');
app.use('/api', serverRoutes);

// Catch-all to serve the frontend (index.html) for any other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
