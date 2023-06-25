const express=require('express')
const app=express();
app.get('/',((req,res)=>{
    console.log("user visited")
    res.sendFile('/home/aryaman/Desktop/express_start/prac.html');
}))
app.listen(3000,()=>{
    console.log("listing on port 3000");
})