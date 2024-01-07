// Use Express to create handle routes.
const express=require('express')
const router=express.Router()
router.get("/",(req,res)=>{
    res.sendFile(__dirname+"/Home page.html")
})
router.get("/Contactus",(req,res)=>{
    res.sendFile(__dirname+"/Contact us.html")
})
router.get("/OurService",(req,res)=>{
    res.sendFile(__dirname+"/Our Services.html")
})

module.exports=router