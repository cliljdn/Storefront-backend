const mongoose = require('mongoose')
const collectionNames = require('../../helpers/Constants/collectionNames')
const { Schema } = mongoose

const schema = new Schema(
     {
          quantity: {
               type: Number,
               require: true,
          },

          checkout: {
               type: Boolean,
               default: false,
          },

          customer: {
               type: mongoose.Schema.Types.ObjectId,
               ref: collectionNames.Profile,
          },

          items: {
               type: mongoose.Schema.Types.ObjectId,
               ref: collectionNames.Inventory,
          },
     },

     {
          timestamps: true,
     }
)

module.exports = mongoose.model(collectionNames.Cart, schema)
