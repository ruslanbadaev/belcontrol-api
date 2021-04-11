const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const PointSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    creator: {
      type: String,
      required: true
    },
    coordinates: {
      x: {
        type: Number,
        required: true
      },
      y: {
        type: Number,
        required: true
      }
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
PointSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Point', PointSchema)
