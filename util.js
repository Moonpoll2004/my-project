const {createHash} = require("crypto");

function hash(data){
    var hash = createHash('sha256')
    var r = hash.update(data).digest("hex")
    return r
}

function Checkhash(data,hashed){
    var hash = createHash('sha256')
    var r = hash.update(data).digest("hex")
    if(r === hashed){
        return true
    }else{
        return false
    }
}

module.exports = {hash,Checkhash}