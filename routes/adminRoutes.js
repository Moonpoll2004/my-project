const express = require("express");
const adminRouter = express.Router();
const mongoose = require('mongoose');
const Blog = require('../models/BlogM');
const Sub = require("../models/SubM");

//MIDDLEWARES FOR ADMIN
const {AdminLog,CheckAdminLog} = require('../middlewares/Foradmin')

adminRouter.get('/admin',CheckAdminLog,(req,res)=>{
    try{
        res.status(200)
        res.render('pages/admin/adminLog')
        res.end("Good")
    }catch(e){
        res.status(400)
        res.end("Bad Request")
        console.log(e)
    }
})

adminRouter.get('/admin/portal',AdminLog,(req,res)=>{
    try{
        res.status(200)
        res.render('pages/admin/portal',{
            admin:req.query.name || req.cookies.name,
        })
        res.end("OK")

    }catch(e){
        res.status(400)
        res.end("Bad Request")
        console.log(e)
    }
})

adminRouter.post('/admin/post_blog',async(req,res)=>{
    try{
        const blog =await new Blog({
            title:req.body.title,
            author:req.cookies.admin,
            category:req.body.category,
            content:{
                head:req.body.head,
                main:req.body.main,
                footer:req.body.footer
            }
        })
        await blog
        .save()
        .then(()=>{
            res.status(200)
            res.redirect('/admin/portal')
            res.end()
        })
        .catch((err)=>{
            res.status(400).end("Err")
            console.log(err)
        })
    }catch(err){
        console.log("worong")
        console.log(err)
    }
})

adminRouter.delete('/admin/delete',async(req,res)=>{
   try{
    if(req.body.category === "Subs"){
       await Sub.deleteMany()
        .exec()
        .then(()=>{
            res.status(200).end('OK')
        })
        .catch(()=>{
           res.status(404).end("Bad Request") 
        })
    }else{
       await Blog.deleteMany({category:req.body.category})
       .exec()
       .then(()=>{
            res.status(200).end('OK')
       })
       .catch(()=>{
            res.status(404).end('Bad Request')
       })
    }
   }catch(err){
       res.status(404).end("Bad Request")
   }
   
})

module.exports = adminRouter;