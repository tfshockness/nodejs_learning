const { Todo } = require('../models/todo');

/**
 * 
 * @param {Object} todo - Todo Object = {title: String, text: String, completed: Boolean, completedAt: Number} 
 */
module.exports.createTodo = async (todo) => {
    try {
        const newTodo = await new Todo(todo).save();
        console.log(`Todo was successfuy saved: ${newTodo}`);
    } catch (e) {
        console.log(`Unable to save Todo ${e}`);
    }
}