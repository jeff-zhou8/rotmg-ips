const express = require('express');
const router = express.Router();

// Mock data for servers
const servers = [
  { name: "US East", ip: "198.27.83.230" },
  { name: "US West", ip: "192.99.20.63" },
  { name: "Asia", ip: "103.10.208.157" },
  { name: "Australia", ip: "103.10.208.158" }
];

// Route to get all servers
router.get('/servers', (req, res) => {
  res.json(servers);
});

// Route to get server by name
router.get('/servers/:name', (req, res) => {
  const server = servers.find(s => s.name.toLowerCase() === req.params.name.toLowerCase());
  if (server) {
    res.json(server);
  } else {
    res.status(404).json({ error: 'Server not found' });
  }
});

module.exports = router;
