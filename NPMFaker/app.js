var fk=require("faker");


for (var i=0;i<10;i++)
{
var prod=fk.commerce.product();
var price=fk.commerce.price();
console.log(prod+" - $"+price);
}
