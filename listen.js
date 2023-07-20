const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const path = require('path');

// const app = express();
const app = require('./server/server.js')

// Start the server
const port = 3030;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
