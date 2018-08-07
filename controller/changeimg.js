const {Router} = require('express')
const router = Router();
const user = require('../database/user');
   

router.post('/changeimg',(req,res)=>{
    let userimg=req.body.userimg;
    let email=req.cookies.email;
    user.update({email},{userimg}).then(data=>{
        req.session.user.userimg=userimg
            res.json({
                code:200,
                msg:"success",
            })
    })
});
router.get('/getimg',(req,res)=>{
       let userimg=req.session.user.userimg;
       res.json({
           code:200,
           msg:"success",
           userimg,

       })
})


module.exports = router;