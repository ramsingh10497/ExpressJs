const express = require('express');
const app = express();

 app.get('/', (req,res) => {
    res.send('<h1>Hello World</h1>')
 })
 app.get('/greet', (req,res) => {
    res.send('<h1>Good Morning</h1>')
 })
app.get('/query', (req, res) => {
    let person = 'Guest';
    if (req.query.person) {
        person = req.query.person;
    }
   
    res.send('<h1>Query Checking</h1>' + person)
})

app.listen(8888, function () {
    console.log('Server Started on http://localhost:8888')
})