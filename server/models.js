var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productdb');

var ProductSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 4},
    price: {type: Number, required: true,},
    imgUrl: {type: String}
});

mongoose.model("Product", ProductSchema)
var Product = mongoose.model("Product");

module.exports = Product;