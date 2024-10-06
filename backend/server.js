const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, './public')));

// API routes
app.use('/api', require('./routes'));

// Fallback route to serve index.html for any non-API routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});

// Listen on the dynamic Railway PORT or default to 3000 locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
