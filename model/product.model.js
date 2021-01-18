
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Product = new Schema({
    code: String,
    currency: String,
    name: String,
    image: String,
    categoryId: Number,
    typeId: Number,
    description: String,
    subImg: [
        {
            _id:false,
            id: Number,
            name: String
        }
    ],
}, {
    collection: 'product'
});
// let Category = new Schema({
//     name: {
//         type: String
//     },
// }, {
//     collection: 'category'
// });
// let Type = new Schema({
//     name: {
//         type: String
//     },
// }, {
//     collection: 'type'
// });

// module.exports = mongoose.model('Category', Category);
// module.exports = mongoose.model('Type', Type);
module.exports = mongoose.model('Product', Product);