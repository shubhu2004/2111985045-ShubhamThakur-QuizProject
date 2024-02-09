// models/Result.js

const mongoose = require('mongoose');

// Define the schema for the result model
const resultSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming there's a User model
        required: true
    },
    quizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz', // Assuming there's a Quiz model
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    // Any other fields you need for the result
}, { timestamps: true });

// Create the Result model from the schema
const Result = mongoose.model('Result', resultSchema);

module.exports = Result;
