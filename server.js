const express = require('express');
const bodyParser = require('body-parser');

const config = require('./src/lib/config');
const home = require('./src/controller/homeController');
const todos = require('./src/controller/todoController');
//IF express is going to point to a public folder to host a page, the function express.static 
//have to be set as a middleware for express.
//To add a middleware use use()

//app.use(express.static(__dirname + '/public')); //This will start express server looking for a /public to host

const app = express();

//Middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to my API.');
});

app.get('/api/home', home.get);
app.get('/api/404', home.error);
app.get('/api/todos', todos.getTodos);
app.post('/api/todos', todos.postTodos);


app.listen(config.port, () => console.log(`Server running on port ${config.port}.`));


module.exports.app = app;