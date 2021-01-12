import mongoose, { Schema, Types } from 'mongoose'

const cateSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  typeId: {
    type: Types.ObjectId,
    ref: 'type-products',
    required: true
  }
}, { timestamps: true})

module.exports = mongoose.model('cate-product', cateSchema)