const express = require('express')
const router=express.Router();
const auth = require('../middleware/auth');

const {home,register,score,fetchtopic,getquetion, selecttopic,login,otp,user,}=require('../controllers/auth-controller')


router.route('/api/login').post(login)
router.route('/api/otp').post(otp)
router.route('/api/').get(home)
router.route('/api/fetchtopic').post(auth ,fetchtopic)
router.route('/api/f').post( fetchtopic)
router.route('/api/questions/:topic').post(auth,getquetion)
router.route('/api/user').get(auth,user)
router.route('/api/score').post(auth,score)
router.route('/api/select').post(auth,selecttopic)

router.route('/api/users/register').post(register)

module.exports=router;
