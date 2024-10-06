<<<<<<< HEAD
const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use the routes defined in routes.js
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Realm of the Mad God server running on port ${PORT}`);
});
=======
const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use the routes defined in routes.js
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Realm of the Mad God server running on port ${PORT}`);
});
>>>>>>> 6d7c2a2 (1st)
