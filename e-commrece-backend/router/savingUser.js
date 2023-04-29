const express=require("express")
const router=express.Router()
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const account=require("../model/account")


router.post("/signup",(req,res)=>{
    const {name,email,phone,password,Type}=req.body
    if(!name || !email || !phone|| !password|| !Type) {
        res.status(422).json({err:"All fields must be Filled..."})
    }
    else{
        
        account.findOne({email:email})
            .then((savedUser)=>{
                if(savedUser){
                    res.status(422).json({err:"User Already Exists"})
                }
                else{
                
                    bcrypt.hash(password,12)
                           .then(hashedPassword=>{
                            const acc=new account({
                                name,
                                email,
                                phone,
                                password:hashedPassword,
                                Type
                                
                            })
                            acc.save()
                                .then(acc=>{
                                    res.status(200).json({msg:"Added Successfully"})
                                })
                           })
                }
            })
    }
})

router.post("/login",(req,res)=>{
    const {email,password,Type}=req.body
    if(!email || !password || !Type){
        return res.status(422).json({err:"All field must be required..."})
    }
    else{
        account.findOne({email:email})
            .then(dbsuer=>{
                if(!dbsuer){
                    return res.status(422).json({err:"Invalid email ID"})

                }
                else{
                    bcrypt.compare(password,dbsuer.password)
                          .then(domatch=>{
                            if(domatch){
                                const token=jwt.sign({id:dbsuer._id},"backend")
                                return res.json({token,Type})
                            }
                            else{
                                return res.status(422).json({err:"wrong password"})
                            }
                          })
                }
            })
    }
})



module.exports=router