const express = require('express');
const router = express.Router();

// Example server data
const servers = {
    us: [
        { id: 1, ip: '192.168.1.1', realms: ['Realm A', 'Realm B'] },
        { id: 2, ip: '192.168.1.2', realms: ['Realm C', 'Realm D'] }
    ],
    eu: [
        { id: 1, ip: '192.168.2.1', realms: ['Realm E', 'Realm F'] },
        { id: 2, ip: '192.168.2.2', realms: ['Realm G', 'Realm H'] }
    ],
    global: [
        { id: 1, ip: '192.168.3.1', realms: ['Realm I', 'Realm J'] },
        { id: 2, ip: '192.168.3.2', realms: ['Realm K', 'Realm L'] }
    ]
};

// API endpoint to get server data
router.get('/api/servers', (req, res) => {
    res.json(servers);
});

module.exports = router;
