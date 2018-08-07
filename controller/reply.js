const {Router} = require('express')
const router = Router();
const reply = require('../database/reply');
const article = require('../database/article');

router.post('/reply',(req,res)=>{
    let {essayid, replycontent}=req.body;
    let replyname=req.cookies.username;
    let replyimg=req.cookies.userimg;
    reply.create({essayid,replycontent,replyname,replyimg}
    ) .then(data=>{
            article.update({_id:essayid},{$push:{commontnumsid:data._id}}).then(data=>{
            res.json({
                code:200,
                msg:"评论成功"
            })})
        })

});
router.get(`/getreply/:id`,(req,res)=>{
   let essayid =req.params.id;
    reply.find({essayid:essayid})
        .sort({
            _id:-1
        })
        .then(data=>{
            console.log(data)
        res.json({
            data,
            code:200,
            msg:'success'
        })
    })
});



module.exports = router;
