const express = require('express');
const router = express.Router();  // Use the Router feature in Express

// Example route
router.get('/servers', (req, res) => {
  res.json({
    "servers": [
      { name: "Nexus", ip: "54.209.152.223" },
      { name: "[BETA] Hearth", ip: "3.92.186.173" },
      // Additional servers here...
    ]
  });
});

// Example POST route (if applicable)
router.post('/add-server', (req, res) => {
  const newServer = req.body;
  // Logic to add the new server...
  res.status(201).json(newServer);
});

module.exports = router;
