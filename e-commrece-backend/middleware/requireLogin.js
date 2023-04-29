const jwt=require("jsonwebtoken")
const account=require("../model/account")
module.exports = (req,res,next)=>{
    const {authorization}=req.headers
    if(!authorization){
        return res.status(401).json({message:"You must be logged in"})
    }
    else{
        const token =authorization.replace("Bearer ","")
        jwt.verify(token,"backend",(err,payload)=>{
            if(err){
                return res.status(401).json({message:"You must be logged in"})
            }
            else{
                const {id}=payload
                account.findById(id)
                    .then(account=>{
                        account.password=undefined
                        req.account=account
                        next()
                    })
            }
        })
    }
}