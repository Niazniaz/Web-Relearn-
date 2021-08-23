var exp=require('express');
var app=exp();
//var bp=require('body-parser');
//app.use(bp.urlencoded({extended:true})); bp now built-in

app.use(exp.urlencoded({extended: true}));
app.use(exp.json()) // To parse the incoming requests with JSON payloads

app.use(exp.static("public"));
app.set("view engine","ejs")

var fri=["to","k","l","o","p"];

app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/fall/:thing',(req,res)=>{
    var thing=req.params.thing;
    res.render('lv',{thing:thing});
});

app.get('/posts',(req,res)=>{
    var posts=[
        {tit:"d",aut:"denis"},
        {tit:"a",aut:"agatha"},
        {tit:'bs',aut:'knut'}
    ];

    res.render("post",{posts:posts});
});

app.get("/friends",(req,res)=>{
    
    res.render("friends",{fri:fri});
});

app.post("/addf",(req,res)=>{
    //res.send("post");
    var newfs=(req.body.newFri);
    fri.push(newfs);
    res.redirect('/friends');
});

app.listen(3000)