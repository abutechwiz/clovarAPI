const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    name:String,
    tests:String,
    user: String,
    status: String
})

module.exports = mongoose.model('Order', orderSchema);
