var express = require('express');
var app = express();

//IF express is going to point to a public folder to host a page, the function express.static 
//have to be set as a middleware for express.
//To add a middleware use use()

//app.use(express.static(__dirname + '/public')); //This will start express server looking for a /public to host

app.get('/', (req, res) => {
    res.send({
        A00972539: {
            name:"Timoteo Shockness",
            course: "COMPUTER SYSTEM"
        }
    })
});

app.listen(3001, "localhost");