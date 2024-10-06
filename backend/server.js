const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the frontend directory (public or equivalent)
app.use(express.static(path.join(__dirname, '../frontend/public')));

// API routes
app.use('/api', require('./routes'));

// Catch-all route to serve index.html for non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
