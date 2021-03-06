const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())
app.get("/",(req,res)=>{
    res.status(200).cookie("auth","authorizer",{httpOnly:true}).json({'hello':"hello"})
})
app.get("/app/test",(req,res)=>{
    res.status(200).cookie("auth","authorizer",{httpOnly:true}).json({'hello':"test hello"})
})
app.listen(process.env.PORT || 3000,()=>{
    console.log('server running on port 3000')
})
