import mongoose, { Schema } from 'mongoose'

const typeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
}, {timestamps: true})

typeSchema.post('save', (error, doc, next) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    return next(new Error('this type product has been using'))
  }
  return next(error)
})


module.exports = mongoose.model('type-product', typeSchema)