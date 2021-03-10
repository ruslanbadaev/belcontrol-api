const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const AdSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    creator: {
      type: String,
      required: true
    },
    vote: {
      title: {
        type: String
      },
      options: {
        type: Array
      }
    },
    files: {
      type: Array,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
AdSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Ad', AdSchema)
