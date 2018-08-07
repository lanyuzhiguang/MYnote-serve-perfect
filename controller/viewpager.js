const {Router} = require('express')
const router = Router();
const photo = require('../database/photo');

router.post('/picimg',(req,res)=>{
    let {picturename}=req.body;
    console.log(req.body)
    photo.create({picturename}).then(data=>{
        res.json({
            code:200,
            msg:"上传成功"
        })

    })
})

router.get('/getviewpaper',(req,res)=>{
    photo.findOne().then(data=>{
        res.json({
            code:200,
            msg:"success",
            data,

        })
    })

});


module.exports = router;