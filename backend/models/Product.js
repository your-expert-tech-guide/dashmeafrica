const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  slug: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: String, required: true },
  countInStock: { type: Number, required: true, default: 0 },
  rating: { type: Number, required: true, default: 0 },
  numReview: { type: Number, required: true, default: 0 },
  description: { type: String, required: true },
  location: { type: String, required: true },

});

module.exports = mongoose.model('Product', productSchema)
