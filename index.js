const express = require('express');
const route=require("./router/userRouting");
const cors=require("cors");
const ProductRoute = require('./router/productRouting');
const app = express();


//Application middleware: It is application for all the routes we have i.e.,routeand productRoute
const applicationMiddleware =(req,res,next)=>{
  console.log('application middle ware running here')
  next()
}
app.use(applicationMiddleware)

app.use("/user",route)
app.use("/products",ProductRoute)

app.use(cors({
  origin:"*"
}))
const port = 4000; 
app.listen(port, () => {
  console.log(`Server is running fine on http://localhost:${port}`);
});
