// Use Express to create the serve
const express=require('express')
const app=express()
let date=new Date()
console.log(date)
let day=date.getDay()
console.log(day)
let hour=date.getHours()
console.log(hour)
// Check if it's Monday to Friday and the time is between 9:00 and 17:00
const authMiddleware=(req,res,next)=>{
   if ((day>1&&day<=5)&&(hour>9 &&hour<=17)){
    next()}
    else{
// Deny access and  display a message
        res.sendFile(__dirname+'/view/authorised.html')
    }
   }
// Call the authMiddleware 
app.use("/",authMiddleware,require('./view/Getes'))
app.use(express.static(__dirname+"/view"))
//server is running in port 9000
app.listen(9000,(err)=>{
    err?console.log(err):
    console.log("server is running in port 9000")
})

    
