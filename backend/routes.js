const express = require('express');
const router = express.Router();

const servers = [
  { name: "USEast", ip: "54.234.226.24" },
  { name: "USEast2", ip: "54.209.152.223" },
  { name: "USMidWest", ip: "18.223.98.102" },
  { name: "USWest", ip: "54.86.47.176" },
  { name: "EUWest", ip: "15.237.60.223" },
  { name: "Australia", ip: "13.211.79.144" }
];

router.get('/servers', (req, res) => {
  res.json(servers);
});

module.exports = router;
