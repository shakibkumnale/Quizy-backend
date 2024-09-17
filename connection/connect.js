require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(process.env.CONNECTION_URL,{
}).then(()=>{
    console.log("connected")
}).catch((e)=>{
    console.log(e)
})
