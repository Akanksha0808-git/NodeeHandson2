//use can use either this
// const express=require("express")

// const route=express.Router()


//or this as well as optimized code
const route=require("express").Router()

const{ login}=require("../controller/userController")
const validate=require("../middleware/userMiddleware")



//Routing level middleware
route.get("/api/login",validate,login)
module.exports=route;