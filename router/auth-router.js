const express = require('express')
const router=express.Router();
const auth = require('../middleware/auth');

const {home,register,score,fetchtopic,getquetion, selecttopic,login,otp,user,}=require('../controllers/auth-controller')


router.route('/api/users/login').post(login)
router.route('/otp').post(otp)
router.route('/api/users/home').get(home)
router.route('/fetchtopic').post(auth ,fetchtopic)
router.route('/api/questions/:topic').post(auth,getquetion)
router.route('/user').get(auth,user)
router.route('/score').post(auth,score)
router.route('/select').post(auth,selecttopic)

router.route('/api/users/register').post(register)

module.exports=router;
