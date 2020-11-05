const Admin = require("../models/adminM");

const {hash} = require('../util')

async function AdminLog(req,res,next){
    if(req.query.name && req.query.pass){
       await Admin.exists({name:req.query.name,password:hash(req.query.pass)})
        .then(result =>{
            if(result === true){
                res.cookie('admin',hash(req.query.pass),{maxAge:1000*60*60*24*120})
                res.cookie('name',req.query.name,{maxAge:1000*60*60*24*120})
                next()
            }else{
                res.redirect('/')
            }
        })
        .catch(err => console.log(err))
    }else if(req.cookies.admin){
        await Admin.exists({password:req.cookies.admin})
        .then((value)=>{
            if(value === true){
                next()
            }else{
                res.redirect('/')
            }
        })
        .catch((err)=>{console.log(err)})
    }else{
        res.redirect('/')
    }
}

function CheckAdminLog(req,res,next){
    if(req.cookies.admin){
        res.status(200).redirect('/admin/portal')
    }else{
        next()
    }
}

module.exports = {AdminLog,CheckAdminLog}