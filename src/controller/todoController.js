const express = require('express');

const Todo = require('../models/todo');

var todo = express.Router();

todo.get('/todos', async (req, res) => {
    try{
        const todos = await Todo.find();
        res.status(200).send(todos);
    }catch(e){
        res.status(500).send(e)
    }
});

todo.get('/todos/:id', async( req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        todo ? res.status(200).send(todo) : res.status(404).send({error: `Todo with id ${req.params.id} not found`});
    } catch (e) {
        res.status(404).send(e);
    }
});

todo.post('/todos', async(req, res) => {
    try {
        const todo = await new Todo(req.body).save();
        res.status(201).send(todo);

    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = todo;