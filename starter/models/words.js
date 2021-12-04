const mongoose = require('mongoose');

const WordsSchema = new mongoose.Schema({
    word: {
        type: String,
        required: [true, 'Words must not be empty'],
    },
    definitions:{
        type: [{ type: String }],
        required: [true, 'Words must not be empty'],
    },

    codesSample:{
        type: String,
        required: [true, 'Words must not be empty'],
    }
})