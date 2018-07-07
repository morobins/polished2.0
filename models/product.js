const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema ({
  brand: { type: String, required: true },
  product_name: String,
  color: { type: String, required: true },
  notes: String,
  date_of_purchase: Date,
  product_category: { type: String, required: true }
});

//this is how we can talk to our database through "find all, creat, etc"
const Product = mongoose.model("Product", productSchema);

module.exports = Product;