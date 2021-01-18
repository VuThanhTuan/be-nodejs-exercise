
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Type = new Schema({
    name: String
}, {
    collection: 'type'
});

module.exports = mongoose.model('Type', Type);