const express = require('express');
const router = express.Router();

router.get('/api/servers', (req, res) => {
    res.json([
        // Add the server IPs here, for example:
        { name: "USEast, Nexus", ip: "54.234.226.24" },
        { name: "USEast, [BETA] Zephyr", ip: "3.87.200.184" },
        { name: "USEast2, Nexus", ip: "54.209.152.223" },
        // Include all the server IPs as before
    ]);
});

module.exports = router;
