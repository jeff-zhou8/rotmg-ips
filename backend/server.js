const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the frontend public directory
app.use(express.static(path.join(__dirname, '../frontend/public')));

// API route to get the server IP list
const serverRoutes = require('./routes');
app.use('/api', serverRoutes);

// Catch-all route to serve the frontend index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
