const {Router} = require('express')
const router = Router();
const article = require('../database/article');

router.post('/article',(req,res)=>{
    console.log(req.cookies.username)//session必须再次登陆后才能获得为什么,session.user.
      if(req.cookies.username){
          let {publictitle, contentText, content,searcharr,}=req.body;
           let username=req.cookies.username;//req.session.user.username
          let userimg=req.cookies.userimg
          article.create({publictitle, contentText,
              content,username,searcharr,userimg}).then(data=>{
              res.json({
                  code:200,
                  msg:"上传成功"
              })

          })
      }
      else{
          res.json({
              code:401,
              msg:"请登录后再发表"
          })
      }
});
router.get('/articleitem',(req,res)=>{
    article.find()
        .populate({ path: 'commontnumsid'})
        .sort({_id:-1})
        .then(data=>{
         res.json({
            data,
            code:200,
            msg:"success"
        })
    })
});
router.get(`/detailone/:id`,(req,res)=>{
    let id =req.params.id
    article.findOneAndUpdate({_id:id},{$inc:{looknums:1}}).then(data=>{
        res.json({
            data,
            code:200,
            msg:'success',
        })
    })
})
module.exports = router;