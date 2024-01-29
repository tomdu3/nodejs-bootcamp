const express = require('express');

const app = express();


// app - GET request

// app.get('/', function(request, response) {
//    console.log(request);
//    resp.send('Hello World')
// })

app.get('/', (req, resp) => {
    // resp.send('Hello World');
    resp.sendFile(__dirname + '/index.html');
    console.log(__dirname);
});

app.post('/', (req, res) => {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    console.log(result);
    res.send('Your result is: ' + result);
})
// app.listen(3000); - we need to add the callback function

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});

