const express = require('express');
const router = express.Router();

router.get('/servers', (req, res) => {
  res.json({
    "US Servers": {
      "USEast": [
        { name: "Nexus", ip: "54.234.226.24" },
        { name: "[BETA] Hearth", ip: "54.209.152.223" },
        { name: "[BETA] Frontier", ip: "54.196.48.20" },
        { name: "[BETA] Mesa", ip: "3.87.200.184" },
        { name: "Slime", ip: "54.144.164.168" },
        { name: "[BETA] Horizon", ip: "3.87.200.184" }
      ],
      "USEast2": [
        { name: "[BETA] Squall", ip: "44.202.130.164" },
        { name: "Bat", ip: "44.201.222.72" }
      ],
      "USWest": [
        { name: "Nexus", ip: "54.86.47.176" },
        { name: "[BETA] Frontier", ip: "52.55.11.175" }
      ],
      "USWest3": [
        { name: "Nexus", ip: "13.56.194.53" },
        { name: "[BETA] Meridian", ip: "13.56.194.53" },
        { name: "[BETA] Mesa", ip: "3.82.104.152" },
        { name: "Drake", ip: "3.92.207.94" }
      ],
      // Continue adding other US, EU, and Global servers in the same structure
    },
    "EU Servers": {
      // EU servers here
    },
    "Global Servers": {
      // Global servers here
    }
  });
});

module.exports = router;
