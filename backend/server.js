
const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Serve static files from frontend
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api', routes);

// Catch-all route to serve frontend's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
