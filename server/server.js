const express = require('express'),
    app = express(),
    port = 3000;

app.get('/', (req, res) => {
    res
        .status(200)
        .send({error: 'Error Message'})
});

app.get('/users', (req, res) => {
    res
        .status(200)
        .send([
            {
                name: "Lucas Oliveira",
                age: "23"
            }, {
                name: "Carlos Santiago",
                age: 18
            }, {
                name: "Ferninand Sontoto",
                age: 22
            }
        ])
})

app.post('/users', (req, res) => {
    res.send({name:"Lucas"})
})

app.listen(port, console.log(`Server is running on port ${port}`))
module.exports.app = app;