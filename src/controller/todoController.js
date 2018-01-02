const Todo = require('../models/todo');

module.exports = {
    getTodos: (req, res) => {
        try{
            Todo.find( (err, todos) => {
                err ? res.status(500).send(err)
                    : res.send(JSON.stringify(todos));
            });
        }catch(e){
            res.send({
                error: 'Something went wrong!',
                msg: e
            })
        }
        
    },
    postTodos: async (req, res) => {
        try {
            const todo = await new Todo(req.body).save();
            res.status(201).send(todo);

        } catch (e) {
            res.status(400).send(e);
        }
        res.send('Tesint Post');
    }
}