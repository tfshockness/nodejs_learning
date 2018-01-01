const mongoose = require('mongoose');

    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/TodoApp')

    //Creating a Model

    //USER
    const User = mongoose.model('User', {
        email: {
            type: String,
            required: true,
            minlength: 4,
            trim: true
        },
        password: {
            type: String,
            required: true
        }
    });

    //TODO
    const Todo = mongoose.model('Todo', {
        title: {
            type: String,
            required: true,
            minlength: 4,
            maxlenght: 50,
            trim: true
        },
        text:{
            type: String,
            required: true,
            minlength: 1,
            maxlenght: 255,
            trim: true
        },
        completed:{
            type: Boolean,
            required: false,
            default: false
        },
        completedAt: {
            type: Number,
            default: null
        }
    });

    const createTodo = async (todo) =>
    {
        try{
            const newTodo = await new Todo(todo).save();
            console.log(`Todo was successfuy saved: ${newTodo}`);
        }catch(e)
        {
            console.log(`Unable to save Todo ${e}`);
        }
        

    }

    /**
     * 
     * @param {Object} user - email and password 
     */
    const createUser = async (user) =>
    {
        try{
            const newUser = await new User(user).save();
            console.log(`User saved: ${JSON.stringify(newUser, undefined, 2)}`);
        }catch(e){
            console.log(`Unable to save the user: ${e}`);
        }
        

    }

    // createTodo({
    //     title: '2018',
    //     text: 'Decide what kind of developer you wants to be!',
    //     completed: false,
    //     completedAt: undefined
    // });

    createUser({
        email: 'hello@timo.com',
        password: 'secret@123'
    })