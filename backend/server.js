const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static files from the frontend
app.use(express.static('../frontend/public'));

// Sample API endpoint to get server data
app.get('/api/servers', (req, res) => {
    const servers = {
        US: [
            { id: 'US1', ip: '192.168.1.1', realms: ['Realm1', 'Realm2'] },
            { id: 'US2', ip: '192.168.1.2', realms: ['Realm3'] }
        ],
        EU: [
            { id: 'EU1', ip: '192.168.2.1', realms: ['Realm4', 'Realm5'] }
        ],
        Global: [
            { id: 'Global1', ip: '192.168.3.1', realms: ['Realm6'] }
        ]
    };
    res.json(servers);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
