var exp=require("express");
var app=exp();

app.get("/",(req,res)=>{
    res.send("Hi");
});

app.get("/speak/:anml",(req,res)=>{
    var sounds={pig:"oink",cow:"moo",dog:"bow",frog:"ribbit",cat:"Meow"};
    var animal=req.params.anml;
    res.send("The "+animal+" says "+sounds[animal.toLowerCase()]);
});

app.get("/repeat/:word/:num",(req,res)=>{
    var line="";
    for(var i=0;i<req.params.num;i++)
    {
        line+=req.params.word+" ";
    }
    res.send(line);
});

app.get("*",(req,res)=>{
    res.send("GAMER TIME");
});

app.listen(3000);