const {Schema,model} = require("mongoose")

const SubSchema = new Schema({
    userName:{type:String, required:true},
    content:{type:String,required:true},
    date:{type:Date,default:Date.now()},
})


module.exports = model("Sub",SubSchema,"Subs")