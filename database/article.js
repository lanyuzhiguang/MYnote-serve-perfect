const mongoose = require("mongoose");

const article = new mongoose.Schema({
    username: String,
    publictitle: {
        type: String,
    },
    commontnumsid: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'reply' }],
    content: String,
    contentText: String,
    looknums: {
        type: Number,
        default: 0,
    },
    searcharr: Array,
    userimg:String,
    authorMsg: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }

}, {versionKey: false, timestamps: {createAt: "createTime", updateAt: "updateTime"}})

module.exports = mongoose.model("article", article)