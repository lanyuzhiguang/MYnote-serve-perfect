const {Router} =require ('express')
const router = Router();
const user = require('../database/user');
router.post('/login',(req,res)=>{
      let {email,pwd} =req.body;
      user.findOne({email}).then(data=>{
          if(data){
             if(pwd==data.pwd){
                 console.log(data)
                 let usermsg={};
                 usermsg.username=data.username;
                 usermsg.email=data.email;
                 usermsg.userimg=data.userimg;
                req.session.user=usermsg;
              res.json({
                  code:200,
                  usermsg,
                  msg:"登录成功",
              })
          }
          else{
              res.json({
                  cod:401,
                  msg:"密码不正确"
              })
          }
    }
    else
    {
        res.json({
            code: 401,
            msg: "该用户不存在，请注册"
        })
    }
    })
});

module.exports=router;