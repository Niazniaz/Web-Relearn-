var exp=require("express");
var app=exp();

console.log("y")

app.get("/",function(req,res){
    res.send("Hello");
});

app.get("/bye",function(req,res){
    res.send("sayonara");
});

app.get("/dog",(req,res)=>{
    res.send("MEOW");
});

app.get("/r/:Name",(req,res)=>{
    console.log(req.params);
    res.send("Pattern Match " + req.params.Name);
});

app.get("/r/:Name/comments/:id/:tit",(req,res)=>{
    res.send("Pattern Match on comm");
});

app.get("*",(req,res)=>{
    res.send("Not here")
});

app.listen(3000);