const {Router} =require ('express')
const router = Router();
const user = require('../database/user');
const isEmail= require('validator/lib/isEmail') ;
router.post('/register',(req,res )=>{
    console.log(req.body)
    let {username,pwd,email} =req.body;
    console.log({username,pwd,email})
    if(isEmail(email)){
        // console.log(email)
        user.findOne({email}).then(data=> {
            // console.log(data)
            if (data) {
                res.json({
                    code: 401,
                    msg: '该邮箱已注册',
                })
            }
            else {
                user.create({username, pwd, email}).then(data => {
                        res.json({
                            code:200,
                            msg: 'success',
                        })
                })
            }
        })
    }
    else{
            res.json({
                code:401,
                msg:'邮箱格式不对',
            })
    }
    })


module.exports=router;