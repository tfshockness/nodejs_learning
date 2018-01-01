const { mongoose } = require('../db/mongoose');

const Todo = mongoose.model('Todo', {
    title: {
        type: String,
        required: true,
        minlength: 4,
        maxlenght: 50,
        trim: true
    },
    text: {
        type: String,
        required: true,
        minlength: 1,
        maxlenght: 255,
        trim: true
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {
    Todo
}
