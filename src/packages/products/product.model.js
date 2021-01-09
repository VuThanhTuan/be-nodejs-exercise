import mongoose, { Types, Schema } from 'mongoose';

const productSchema = new Schema({
  productName: {
    type: String,
    required: true
  },
  productCode: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: String,
  images: [
    {
      type: String
    }
  ],
  cateId: {
    type: Types.ObjectId,
    ref: 'cate-products',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('product', productSchema)