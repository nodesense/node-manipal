const mongoose = require('mongoose');

// mongodb doesn't has any schema
// mongoose provides ORM aka ODM - Object Document Model
// mongoose try to provide shchema to help developers

// mongodb collections have unique key called _id of type ObjectId
// collection is similar to table in db
const ProductSchema = new mongoose.Schema({
    name:  String,
    price: Number
}, { collection: 'products'})

ProductSchema.set('toJSON', {
    // mongoose objects to json format
    transform: (document, returnedObject) => {
        // assign _id to id
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id // remove _id
      delete returnedObject.__v // remove __v
    }
  })

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
