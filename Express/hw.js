var exp=require('express');
const { send } = require('process');
const internal = require('stream');
var app=exp();

app.get("/",function(req,res){
    res.send("welcome to ass");
});


app.get("/speak/:an",(req,res)=>{
    if (req.params.an.toLowerCase()=="pig")
    {res.send("pig says oink");}
    else if (req.params.an.toLowerCase()=="cow")
    {res.send("cow says moo");}
    else if(req.params.an.toLowerCase()=="dog" )
    {res.send("dog says woof");}
    else
    {res.send("no animals");}
    /*
    we can use a javascript object instead of a if else tree.s
    */
});

app.get("/repeat/:txt/:num",(req,res)=>{
    var t=req.params.txt;
    var n=parseInt(req.params.num);
    if(t=="hello")
    {
        var out=""
        while(n>0)
        {
            out+=t+" "
            n--
        }
        res.send(out);
    }
    else if(t=="blah")
    {
        var out=""
        while(n>0)
        {
            out+=t+" "
            n--
        }
        res.send(out);
    }
    else
    {
        res.send("no repaets")
    }
});

app.get("*",(req,res)=>{
    res.send("failure");
});


app.listen(3000);