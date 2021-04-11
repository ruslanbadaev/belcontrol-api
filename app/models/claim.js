const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const ClaimSchema = new mongoose.Schema(
  {
    postId: {
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
  },
  {
    versionKey: false,
    timestamps: true
  }
)
ClaimSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Claim', ClaimSchema)
