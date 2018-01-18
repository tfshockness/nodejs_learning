const express = require('express');
const bodyParser = require('body-parser');

const config = require('./src/lib/config');
const { todoController, homeController } = require('./src/lib/routers');
// const todoRoute = require('./src/controller/todoController');
// const homeRoute = require('./src/controller/homeController');
//IF express is going to point to a public folder to host a page, the function express.static 
//have to be set as a middleware for express.
//To add a middleware use use()

//app.use(express.static(__dirname + '/public')); //This will start express server looking for a /public to host

const app = express();

//Middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/api', todoController);
app.use('/api', homeController);

app.get('/', (req, res) => {
    res.send('Welcome to my API.');
});

app.use( (req, res) => {
    res.status(404).send({
        error: "Page not found",
    });
});

app.listen(config.port, () => console.log(`Server running on port ${config.port}.`));


module.exports.app = app;