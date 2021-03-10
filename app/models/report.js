const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const ReportSchema = new mongoose.Schema(
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
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
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
ReportSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Report', ReportSchema)
