const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    // Serve an HTML file when a GET request is made to '/'
    res.sendFile(__dirname + '/index.html');
    console.log(__dirname);
});

app.post('/', (req, res) => {
    console.log(req.body);
    const num1 = Number(req.body.n1);
    const num2 = Number(req.body.n2);
    const result = num1 + num2;
    console.log(result);
    res.send('Your result is: ' + result);
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
