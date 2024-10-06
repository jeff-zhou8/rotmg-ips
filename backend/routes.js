const express = require('express');
const router = express.Router();

// Example route for getting server IPs
router.get('/servers', (req, res) => {
    const servers = {
        "US": {
            "Nexus": "54.234.226.24",
            "[BETA] Zephyr": "3.87.200.184",
            // Add other US servers...
        },
        "EU": {
            "Nexus": "15.237.60.223",
            "[BETA] Reverie": "15.188.239.201",
            // Add other EU servers...
        },
        "Global": {
            "Nexus": "18.136.119.114",
            "[BETA] Hearth": "54.251.13.215",
            // Add other Global servers...
        }
    };
    res.json(servers);
});

module.exports = router;
