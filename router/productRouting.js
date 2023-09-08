const ProductRoute=require("express").Router()

ProductRoute.get("/api/product",(req,res)=>{
res.send("this is all product page")
});

//Dynamic Routing using routes in express using params
ProductRoute.get("/api/product/:age",(req,res)=>{
    const age=req.params.age;
    if(age>=18){
        return res.send("user is allowed")
    }
    res.send("user is not allowed ")

    });
//Dynamic Routing using routes in express using queryparameter
ProductRoute.get("/api/createProduct",(req,res)=>{
        // res.send("this is createProduct Page ")
           const {age,name,course}=req.query;
           res.send({age,name,course});


        });
module.exports=ProductRoute;