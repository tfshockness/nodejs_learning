const Todo = require('../models/todo');

module.exports = {
    getTodos: async (req, res) => {
        try{
            const todos = await Todo.find();
            res.status(200).send(todos);
        }catch(e){
            res.status(500).send(e)
        }
    },
    getTodoById: async( req, res) => {
        try {
            const todo = await Todo.findById(req.params.id);
            todo ? res.status(200).send(todo) : res.status(404).send({error: `Todo with id ${req.params.id} not found`});
        } catch (e) {
            res.status(404).send(e);
        }
    },
    postTodos: async(req, res) => {
        try {
            const todo = await new Todo(req.body).save();
            res.status(201).send(todo);

        } catch (e) {
            res.status(400).send(e);
        }
    }
}