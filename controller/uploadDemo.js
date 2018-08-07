const {Router} = require('express')
const router = Router();
const mime =require('mime')
const multer = require('multer');
const path= require('path')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,path.resolve(__dirname,'../demoupload/pic' ))
    },
    filename: function (req, file, cb) {
        let extname = mime.getExtension(file.mimetype);
        cb(null, file.fieldname + '-' + Date.now()+'.'+extname)
    }
});
var upload = multer({ storage
});
router.post('/demoupload', upload.single('pic'),
    (req,res)=>{
        console.log(upload.single('pic'))
    let filePath =`/pic/${req.file.filename}`
        res.json({
        data:filePath,
        code:200,
        msg:"上传成功"
    })}
   )


module.exports = router;