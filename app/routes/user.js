import express from 'express';
import controllers from '../controllers/';
import redis from  'redis'; 
var router=express.Router();
router.post('/usr',controllers.user.adduser);
router.patch('/usr',controllers.user.updateUser);
export default router;