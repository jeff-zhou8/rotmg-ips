const express = require('express');
const router = express.Router();

// Route to get the list of servers and realms
router.get('/servers', (req, res) => {
  const servers = {
    US_East: [
      { realm: "Nexus", ip: "54.209.152.223" },
      { realm: "[BETA] Horizon", ip: "3.87.200.184" },
      { realm: "[BETA] Mesa", ip: "3.87.200.184" },
      { realm: "Slime", ip: "54.144.164.168" }
    ],
    US_East_2: [
      { realm: "Nexus", ip: "54.209.152.223" },
      { realm: "[BETA] Squall", ip: "44.202.130.164" },
      { realm: "Bat", ip: "44.201.222.72" }
    ],
    US_MidWest: [
      { realm: "[BETA] Meridian", ip: "18.223.98.102" },
      { realm: "[BETA] Lumen", ip: "3.140.254.133" },
      { realm: "Spider", ip: "3.132.215.145" }
    ],
    US_MidWest_2: [
      { realm: "Nexus", ip: "3.140.254.133" },
      { realm: "[BETA] Horizon", ip: "3.131.99.10" }
    ],
    US_NorthWest: [
      { realm: "[BETA] Frontier", ip: "3.89.23.211" }
    ],
    US_South: [
      { realm: "[BETA] Zephyr", ip: "44.203.254.167" },
      { realm: "Bat", ip: "54.152.253.238" }
    ],
    US_South_3: [
      { realm: "[BETA] Lumen", ip: "3.83.90.148" }
    ],
    US_SouthWest: [
      { realm: "[BETA] Lumen", ip: "18.144.31.150" }
    ],
    US_West: [
      { realm: "Nexus", ip: "54.86.47.176" },
      { realm: "[BETA] Frontier", ip: "52.55.11.175" }
    ],
    US_West_3: [
      { realm: "[BETA] Meridian", ip: "13.56.194.53" }
    ],
    US_West_4: [
      { realm: "[BETA] Reverie", ip: "3.92.207.94" }
    ],
    EU_East: [
      { realm: "[BETA] Squall", ip: "18.192.54.115" }
    ],
    EU_North: [
      { realm: "[BETA] Zephyr", ip: "18.192.176.238" },
      { realm: "Goblin", ip: "3.70.24.169" }
    ],
    EU_SouthWest: [
      { realm: "[BETA] Squall", ip: "13.38.65.203" },
      { realm: "Lich", ip: "15.237.125.29" }
    ],
    EU_West: [
      { realm: "Nexus", ip: "15.237.60.223" },
      { realm: "[BETA] Cronus", ip: "15.237.108.108" },
      { realm: "[BETA] Frontier", ip: "15.188.79.226" },
      { realm: "[BETA] Zephyr", ip: "35.181.56.245" },
      { realm: "[BETA] Meridian", ip: "35.180.207.199" },
      { realm: "Hobbit", ip: "13.37.241.36" }
    ],
    EU_West_2: [
      { realm: "[BETA] Lumen", ip: "18.201.149.221" }
    ],
    Asia: [
      { realm: "[BETA] Hearth", ip: "54.251.13.215" },
      { realm: "Gargoyle", ip: "18.136.119.114" }
    ],
    Australia: [
      { realm: "[BETA] Cronus", ip: "13.211.79.144" },
      { realm: "Beholder", ip: "3.25.164.73" }
    ]
  };

  res.json(servers);  // Send the servers object as JSON response
});

module.exports = router;
