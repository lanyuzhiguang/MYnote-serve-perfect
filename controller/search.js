const {Router} = require('express')
const router = Router();
const article = require('../database/article');

router.get('/search',(req,res)=>{
        let {title,
             pn=1,
             size=10
             } =req.query;
        let reg = new RegExp(title);//有问题
    article.find({$or:[{title:reg},{content:reg}]})
        .sort({_id:-1})
        .skip(size*(pn-1))
        .limit(size)
        .then(data => {
        // console.log(data)
            res.json({
                data,
                code: 200,
                msg: "success",
            })
    })

});



module.exports = router;