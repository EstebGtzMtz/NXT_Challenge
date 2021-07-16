const { Schema, model } = require('mongoose');

const toDo = new Schema({
    taskName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['toDo', 'completed', 'aborted'],
        default: 'toDo'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})