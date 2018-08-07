const mongoose=require('mongoose');
const user=new mongoose.Schema({
    username:'string',
    email:{
        type:'string',
        unique:true
},
pwd:{
        type:'string'
    },
    userimg:{
        type:'string',
        default: '/api/pic/pic-1533454262740.jpeg'
    }
},{versionKey:false})
module.exports=mongoose.model('user',user)