var exp=require("express");
var app=exp();
var bodyP=require("body-parser");
var friends=["Tit","Trush","FullBring","Niop"];
app.use(bodyP.urlencoded({extended:true}));
app.set("view engine","ejs")

app.get("/",function(req,res){
    res.render("home");
});

app.post("/addFriend",(req,res)=>{
    var newF=(req.body.Fri);
    friends.push(newF);
    res.redirect("/friends");
});

app.get("/friends",(req,res)=>{
    
    res.render("friends",{friends:friends});
});

app.listen(3000);