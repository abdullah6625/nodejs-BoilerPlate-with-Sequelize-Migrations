// import express from 'express';
import user from './user';

 export  default function(app){
       app.use('/api/user',user); 
       
 }
