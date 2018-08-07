const mongoose=require('mongoose');
const photo=new mongoose.Schema({
    picturename:String,

    viewpaper:{
        type:Array,
        default:[
        '/api/pic/pic-1533559458222.jpeg',
        '/api/pic/pic-1533559555673.jpeg',
        '/api/pic/pic-1533560288713.jpeg',
          '/api/pic/pic-1533560946065.jpeg',
         '/api/pic/pic-1533560978520.jpeg',
         '/api/pic/pic-1533561038637.jpeg',
         '/api/pic/pic-1533561075091.jpeg',]
    },

},{versionKey:false})

module.exports = mongoose.model("photo", photo)