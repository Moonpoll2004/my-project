const {model,Schema} = require("mongoose");


const adminSchema = new Schema({
    name:{type:String,required:true},
    password:{type:String,required:true},
    date:{type:Date,default:Date.now()}
})

module.exports = model("Admin",adminSchema,"admins")