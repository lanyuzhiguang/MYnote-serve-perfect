const {Router} = require('express')
const router = Router();
router.get('/islogin',(req,res)=>{
    if(req.cookies.username){
        res.json({
            code:200,
            msg:'success'
        })
    }
    else{
        res.json({
            code:401,
            msg:'没有登录'
        })
    }
})
module.exports = router;