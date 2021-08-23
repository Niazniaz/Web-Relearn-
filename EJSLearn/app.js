var exp=require("express");
var app=exp();
app.use(exp.static("assets"));
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("home.ejs")
});

app.get("/fall/:item",(req,res)=>{
    res.render("fall.ejs",{item:req.params.item});
});

app.get("/posts",(req,res)=>{
    var posts=[
        {title: "Gamers", author:"U"},
        {title:"rise",author:"must"},
        {title:"up",author:"obey"}
    ];
    res.render("posts",{posts:posts});
});

app.listen(3000);