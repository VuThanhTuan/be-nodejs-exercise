import mongoose, { Types, Schema } from 'mongoose';

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
    unique: true
  },
  productCode: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: [
    {
      type: String
    }
  ],
  categoryId: {
    type: Types.ObjectId,
    ref: 'cate-products',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('product', productSchema)