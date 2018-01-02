const mongoose = request('../db/mongoose');


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

module.exports = User