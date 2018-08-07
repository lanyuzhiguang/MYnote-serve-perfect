const {Router} =require ('express')
const router = Router();
const user = require('../database/user');
router.delete('/outlogin',(req,res)=>{
     req.session.destroy(function(err){
         if(err){
             console.log(err)
         }
         else{
             res.clearCookie('sid');
             res.json({
                 cod:200,
                 msg:'退出成功'
             })
         }
     })

})


module.exports=router;