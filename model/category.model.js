
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Category = new Schema({
    name: String
}, {
    collection: 'category'
});

module.exports = mongoose.model('Category', Category);