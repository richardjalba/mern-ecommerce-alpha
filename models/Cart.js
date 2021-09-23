const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  userID: {
    type: String,
  },
  items: [
    {
      productId: {
        type: String,
      },
      name: String,
      quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity must be at least 1'],
        default: 1,
      },
      price: Number,
    },
  ],
  bill: {
    type: Number,
    require: true,
    default: 0,
  },
});

module.exports = Cart = mongoose.model('cart', CartSchema);
