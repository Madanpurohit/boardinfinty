const mongoose = require('mongoose');
const validator = require('validator');

const todoSchema = new mongoose.Schema({
    taskName: {
        type: String, 
        minlength: 1,
        required: true
    }, 
    taskDescription : {
        type: String
    },
    creater: {
        type: String, 
        minlenth: 1,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    expireAt: {
        type: Date,
        default: Date.now
    }
})

const Todo = new mongoose.model('Tasks', todoSchema);
Todo.collection.createIndex({"expireAt": 1}, { expireAfterSeconds: 0});
module.exports = Todo;