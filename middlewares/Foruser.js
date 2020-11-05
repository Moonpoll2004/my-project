function CheckSubValues(req,res,next){
    if(req.body.user && req.body.sub){
        next()
    }else{
        res.status(400).end("Bad request")
    }
}


module.exports = {CheckSubValues}