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
}, { timestamps: true })

cateSchema.post('save', (error, doc, next) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    return next(new Error('this category product has been using'))
  }
  return next(error)
})

module.exports = mongoose.model('cate-product', cateSchema)