const Admin = require('./models/adminM');
const mongoose = require('mongoose');
const settings = require('./settings');
const {hash} = require('./util');
async function setup(){
    await mongoose.connect(settings.MONGO_DB).then(async()=>{
        console.log("Connect To MONGODB Successed at"+""+settings.MONGO_DB)

        const admin = await new Admin({
            name:settings.ADMIN_NAME,
            password:hash(settings.ADMIN_PASS),
        })

       await admin
       .save()
        .then(()=>{
            console.log("Create the Admin Successed")
            console.log("Admin-name:"+""+settings.ADMIN_NAME)
            console.log("Admin-password:"+""+settings.ADMIN_PASS)
        })
        .catch((err)=>{
            console.log("Can not create admin")
            console.log("because of")
            console.log(err)
        })
    }).catch((err)=>{
        console.log("Some errors happend")
        console.log(err)
    })
}

setup()