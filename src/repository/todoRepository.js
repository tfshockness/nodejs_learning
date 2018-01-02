const { Todo } = require('../models/todo');

/**
 * 
 * @param {Object} todo - Todo Object = {title: String, text: String, completed: Boolean, completedAt: Number} 
 */
createTodo = async (todo) => {
    try {
        const todo = new Todo(todo);
        const newTodo = await todo.save();
        return newTodo;
    }catch (e) {
        throw new Error(e);
    }
}

module.exports = {
    createTodo
}