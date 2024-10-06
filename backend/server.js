const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the frontend/public directory
app.use(express.static(path.join(__dirname, './public')));

// API routes
app.use('/api', require('./routes'));

// Serve the frontend index.html for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});

// Use the port Railway provides or default to 3000 locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
