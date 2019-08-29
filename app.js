import express from 'express';
import config from './config';
import routes from './app/routes'
import bodyParser from 'body-parser';
 
var app=express();
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/',()=>{
    console.log('the server is on')
})
routes(app);
 require=require('esm')(module,/*, options*/)
 app.listen(3000,()=>{
     console.log('server is runnng in 3000');
 });

export default app; 