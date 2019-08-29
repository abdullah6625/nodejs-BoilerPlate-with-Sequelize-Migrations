import models from '../models';

exports.adduser=(req,res)=>{
    const { body }= req; 
    console.log(body);
    models.User.create({
          firstName:body.name,
          lastName:body.last,
          email:body.email
    }).then(us=>{
        res.send({status:true,user:us})
    })
}
exports.updateUser=(req,res)=>{
    const {body}=req;
    console.log(body);
        models.User.update({email:body.email},{
            where:{
                id:body.id
            }
        }).then(result=>{
            if(result==1){
                res.send({status:true,msg:'user updated'});
            }else{
                res.send({status:false,msg:'invalid id'});
            }
        });

}