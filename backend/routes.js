const express = require('express');
const router = express.Router();

// Server IPs
const servers = [
  { name: "USEast", ip: "54.234.226.24" },
  { name: "USEast2", ip: "54.209.152.223" },
  { name: "USMidWest", ip: "18.223.98.102" },
  { name: "USWest", ip: "54.86.47.176" },
  { name: "EUWest", ip: "15.237.60.223" },
  { name: "Australia", ip: "13.211.79.144" }
];

// Get all servers
router.get('/servers', (req, res) => {
  res.json(servers);
});

// Get server by name
router.get('/servers/:name', (req, res) => {
  const server = servers.find(s => s.name.toLowerCase() === req.params.name.toLowerCase());
  if (server) {
    res.json(server);
  } else {
    res.status(404).json({ error: 'Server not found' });
  }
});

module.exports = router;
