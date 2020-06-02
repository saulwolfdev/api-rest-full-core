const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.get("/",(req,res)=>{
res.send("rest full");
})
app.listen(3000,()=>{
	console.log("listened on port 3000");
})
