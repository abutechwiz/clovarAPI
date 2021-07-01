const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    _id: Number,
    name: {
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNo:{
        type: Number,
        required: true
    },
})


module.exports = mongoose.model('User', userSchema);