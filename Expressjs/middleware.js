const express=require('express');
const app=express();
//req=>middleware=>res

const logger=(req,res,next)=>{
	const method=req.method;
	const url = req.url;
	const time = new Date().getFullYear()
	console.log(method,url,time)
	next()
}
//when we have middleware add next function or terminate	
app.get('/',logger,(req,res)=>{	
	res.send('home');
});
app.get('/about',logger,(req,res)=>{
	res.send('about');
});
//What if we have 50 routes then we have to add logger in every function of routes
//Without doing that there is an alternative used in middleware_2.js
//will can move the logger(middleware) into a different file

app.listen(5000,()=>{
	console.log("The post is at 5000");
});
