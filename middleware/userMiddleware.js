const validate=(req,res,next)=>{
    console.log('specific level middleware')
    next()
   
}
module.exports=validate;