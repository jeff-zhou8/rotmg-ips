const express = require('express');
const router = express.Router();
const path = require('path');

// Serve the main HTML file
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Example route for server info (adjust based on your actual game logic)
router.get('/api/server-info', (req, res) => {
    res.json({ server: 'Realm of the Mad God', status: 'Online' });
});

module.exports = router;
