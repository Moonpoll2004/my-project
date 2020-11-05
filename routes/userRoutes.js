const express = require("express");
const userRouter = express.Router();
const Blog = require('../models/BlogM');
const Sub = require("../models/SubM");
const socket = require("socket.io");
const {CheckSubValues} = require("../middlewares/Foruser");


userRouter.get('/',(req,res)=>{
	res.status(200).render("pages/home")
})
userRouter.get('/Blogs',async(req,res)=>{
	try {
		var data = []
		const category = req.query.category || "Math";
		await Blog.find({category:category},(err,bl)=>{
			if (err){
				res.status(400).end("Bad request")
			}
			data = bl
		})
		res.status(200).render("pages/Blogs",{
			Blogs:data
		})		
	}catch(err){
		console.log(err)
	}
})

userRouter.get("/Subs",async(req,res)=>{
	try{
		await Sub.find((err,sub)=>{
			if(err){
				res.status(400).end("Bad request")
				console.log(err)
				
			}else{
				res.status(200).render('pages/Subs',{
					data:sub
				});
			}
		})
		
	}catch(err){
		console.log(err)
	}
})

userRouter.post('/Sub_post',CheckSubValues,async(req,res)=>{
	try{
		await new Sub({
			userName:req.body.user,
			content:req.body.sub
		})
		.save()
		.then(()=>{
			res.status(200)
			res.redirect('/Subs'),
			res.end('OK')
		})
		.catch((err)=>{
			console.log(err)
		})
	}catch(err){
		console.log(err)
	}
})

module.exports = userRouter;