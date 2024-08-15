const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const expenseModel = mongoose.model('expense', expenseSchema);
module.exports = expenseModel;