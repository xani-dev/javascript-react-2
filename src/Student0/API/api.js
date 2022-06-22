// 
// File: api.js
// Auth: Martin Burolla
// Date: 6/22/2022
// Desc: Simple API
//

const cors = require('cors');
const express = require('express');

const PORT = 5150;
const app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

// Middleware...
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get('/person', cors(corsOptions), (req, res) => {
    console.log('GET: ' + req.url);
    let p = {person: "joe"};
    res.send(p);
});

app.put('/person', cors(corsOptions), (req, res) => {
    console.log('PUT: ' + req.url);
    res.send(req.body);
});

app.post('/person', cors(corsOptions), (req, res) => {
    console.log('POST: ' + req.url);
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`Express Server is running on port: ${PORT}`);
});

