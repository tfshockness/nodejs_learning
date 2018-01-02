const router = require('express').Router();
const todoController = require('../controller/todoController');
const routers = () => {
    //Todos Routers
    router.route('/todos')
        .get(todoController.getTodos)
        .post(todoController.postTodos);
}

module.exports = routers;