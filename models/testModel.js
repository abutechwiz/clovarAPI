const mongoose = require("mongoose");
const testSchema = new mongoose.Schema({
    name: String,
    price: Number,
    book: Boolean,
    description: String
})

module.exports = mongoose.model("Test", testSchema)