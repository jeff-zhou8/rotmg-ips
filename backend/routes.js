const express = require('express');
const router = express.Router();

router.get('/servers', (req, res) => {
  res.json({
    servers: {
      USEast: [
        { name: 'USEast', ip: '54.234.226.24' },
        { name: 'USEast2', ip: '54.209.152.223' },
        { name: '[BETA] Hearth', ip: '3.92.186.173' },
        { name: '[BETA] Frontier', ip: '54.196.48.20' }
      ],
      USMidWest: [
        { name: 'USMidWest', ip: '18.223.98.102' },
        { name: 'Spider', ip: '3.132.215.145' },
        { name: '[BETA] Lumen', ip: '3.129.66.248' },
        { name: 'Unicorn', ip: '3.131.99.10' }
      ],
      USWest: [
        { name: 'USWest', ip: '54.86.47.176' },
        { name: '[BETA] Reverie', ip: '52.55.11.175' },
        { name: '[BETA] Horizon', ip: '44.212.54.81' },
        { name: '[BETA] Squall', ip: '54.219.211.167' }
      ],
      EU: [
        { name: 'EUEast', ip: '3.75.237.52' },
        { name: 'EUNorth', ip: '18.159.133.120' },
        { name: '[BETA] Meridian', ip: '13.38.65.203' },
        { name: 'EUWest', ip: '15.237.60.223' }
      ]
    }
  });
});

module.exports = router;
