const mongoose = require('mongoose')

const PinSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    image: String,
    latitude: Number,
    longitude: Number,
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'user'
    },
    comments: [
      {
        text: String,
        createdAt: { type: Date, default: Date.now },
        author: {
          type: mongoose.Schema.ObjectId,
          ref: 'user'
        }
      }
    ]
  },
  { timestamps: true }
)
const Pin = mongoose.model('pin', PinSchema)
module.exports = Pin
