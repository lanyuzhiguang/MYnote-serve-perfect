const mongoose = require("mongoose");

const reply = new mongoose.Schema({
    essayid:{type: mongoose.Schema.Types.ObjectId},
    replyname: String,
    replyimg:String,
    replycontent: String,
},{versionKey:false})
module.exports = mongoose.model("reply", reply)