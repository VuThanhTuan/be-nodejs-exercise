import mongoose, { Schema, Types } from 'mongoose'

const typeSchema = new Schema({
  name: {
    type: String,
    required: true
  }
}, {timestamps: true})

module.exports = mongoose.model('type-product', typeSchema)