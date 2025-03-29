const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the current directory
app.use(express.static(path.join(__dirname, '/')));

// Handle 404 errors
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
