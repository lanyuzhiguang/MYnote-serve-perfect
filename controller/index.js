const {Router} =require ('express')
const router = Router();
const register =require('./register');
const login =require('./login');
const outlogin =require('./outlogin');
const uploadDemo=require('./uploadDemo');
const article=require('./article');
const islogin=require('./islogin');
const search=require('./search');
const changeimg=require('./changeimg');
const reply=require('./reply');
const viewpager=require('./viewpager');

router.use(viewpager);
router.use(reply);
router.use(changeimg);
router.use(search);
router.use(islogin);
router.use(article);
router.use(register);
router.use(login);
router.use(outlogin);
router.use(uploadDemo);

module.exports=router;