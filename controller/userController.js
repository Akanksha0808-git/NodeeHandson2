const login =(req,res)=>{

    res.send([
        {name:"akanksha"},
        {name:"aka"},
        {name:"ak"}
    ]);
};
const login2=(req,res)=>{
    res.send("send route login")
};
const login3=(req,res)=>{
    res.send("send route login")
}

module.exports={login,login2,login3};