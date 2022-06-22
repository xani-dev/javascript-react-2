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
const personArray = [];

personArray.push( {
    id: 1,
    name: "John Doe",
    age: 22
})

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

// Middleware...
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

//
// GET /person/:id
//

app.get('/person/:id', cors(corsOptions), (req, res) => { 
    let p = personArray.filter(p => p.id === parseInt(req.params['id']))
    res.send(p[0]);
});

//
// POST /person
//

app.post('/person', cors(corsOptions), (req, res) => {
    personArray.push(req.body)
    res.send(req.body);
});

//
// DELETE /person/:id
//

app.delete('/person/:id', cors(corsOptions), (req, res) => {
    let index = personArray.findIndex(p => p.id === parseInt(req.params['id']))
    delete personArray[index]
    res.send("Ok");
});

app.listen(PORT, () => {
    console.log(`Express Server is running on port: ${PORT}`);
});

