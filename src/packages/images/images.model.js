import mongoose, { Schema, Types } from 'mongoose'

const imageSchema = new Schema({
  images: {
    data: Buffer,
    type: String
  }
})

module.exports = mongoose.model('image', imageSchema)