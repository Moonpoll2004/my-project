const server = require("express")();
const app = require("./app");
const settings = require("./settings");

server.use(app);

server.listen(settings.APP_PORT,()=>console.log("server Runing On "+settings.APP_PORT))




