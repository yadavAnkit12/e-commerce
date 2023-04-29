const express=require("express")
const router=express.Router()
const addProduct=require("../model/addProduct")
const requireLogin = require("../middleware/requireLogin")

router.post("/addProduct",requireLogin,(req,res)=>{
    const {Pname,Pcategory,Pprice,Punit,Ppic,sellerName}=req.body
    if(!Pname || !Pcategory || !Pprice || !Punit || !Ppic|| !sellerName){
        res.status(422).json({err:"All field must be filled"})
    }
    else{
        const product=new addProduct({Pname,Pcategory,Pprice,Punit,Ppic,sellerName})
        product.save()
          .then(result=>{
            res.json(result)
          })
    }
})

router.get("/allProduct",(req,res)=>{
  addProduct.find()
      .then(posts=>res.json(posts))
})

router.get("/myProduct/:Pcategory",(req,res)=>{
   const category=req.params.Pcategory
  addProduct.find({Pcategory:category})
      .then(product=>{
          res.json(product)
      })
})

module.exports=router