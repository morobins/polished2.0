const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userProductSchema = new Schema ({
  photo: String,
  brand: { type: String, required: true },
  product_name: String,
  color: { type: String, required: true },
  notes: String,
  date_of_purchase: Date,
  product_category: { type: String}
});

//this is how we can talk to our database through "find all, create, etc"
const UserProduct = mongoose.model("UserProduct", userProductSchema);

module.exports = UserProduct;