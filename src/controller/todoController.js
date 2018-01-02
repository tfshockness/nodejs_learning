const Todo = require('../models/todo');

module.exports = {
    getTodos: async (req, res) => {
        try{
            const todos = await Todo.find();
            res.status(200).send(todos);
            // Todo.find( (err, todos) => {
            //     err ? res.status(500).send(err)
            //         : res.send(JSON.stringify(todos));
            // });
        }catch(e){
            res.status(500).send(e)
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