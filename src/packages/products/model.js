import { number } from 'joi';
import mongoose, { Types, Schema } from 'mongoose';
const autoIncrement = require("mongoose-auto-increment");

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
    unique: true
  },
  productCode: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  images: [
    {
      index:{
        type: Number
      },
      url: {
        type:String
      }
    }
  ],
  categoryId: {
    type: Types.ObjectId,
    ref: 'cate-product',
    required: true
  },
  typeId: {
    type: Types.ObjectId,
    ref: 'type-product',
    required: true
  }
}, { timestamps: true });

productSchema.post('save', (error, doc, next) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    return next(new Error('this name product has been using'))
  }
  return next(error)
})
// auto increment field productCode
autoIncrement.initialize(mongoose.connection);
productSchema.plugin(autoIncrement.plugin, {
  model: "product", 
  field: "productCode", 
  startAt: 1, 
  incrementBy: 1, // incremented by 1
});

module.exports = mongoose.model('product', productSchema)