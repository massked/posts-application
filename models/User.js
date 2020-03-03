const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    name: {
        firstName: String,
        lastName: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
}, {
    timestamp: true
});

module.exports = mongoose.model('User', userSchem);