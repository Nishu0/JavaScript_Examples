const path= require('path');
const express = require('express');
const app = express();
const templatePath=path.join(__dirname,"./templates");
//console.log(templatePath);
app.set("view engine","hbs");
app.set("views",templatePath);
app.get("/",(req,res)=>{
res.render("index");
});

app.get("/",(req,res)=>{
	res.send("Hello World");
});

app.listen(8000,()=>{
	console.log("Port at 8000");
});
//go to localhost:8000/test.html
