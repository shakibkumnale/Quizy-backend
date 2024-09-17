
const  mongoose  = require("mongoose");
const jwt =require("jsonwebtoken");
const bcrypt=require('bcrypt')
require('dotenv').config();
// const HashPass=await bcrypt.compare(Pass_word,UserO.Password)
const userSchegma= new mongoose.Schema({

Fname:{
    type:String,
    required:true

},
Lname:{
    type:String,
    required:true

},
Password:{ 
    type:String,
    required:true
},


Email:{ type:String,
    required:true,
    unique: true
},
Topics:[{type:Object}]
  

,

tokens:[{
    token:{
    type:String
    // required:true
    }
}]
})
userSchegma.pre("save",async function(params){
    if(this.isModified('Password')){
    this.Password=await bcrypt.hash(this.Password,10)}
params()

})

 userSchegma.methods.generateAuthToken = async function() {
    try {
        const token = jwt.sign({ _id: this._id.toString() }, "shaka");
        this.tokens = this.tokens.concat({ token });
        await this.save();
        return token;
    } catch (error) {
    return error;
        console.error("Error generating auth token:", error);
        // throw new Error("Error generating auth token");
   
    }
};

const User = new mongoose.model("user",userSchegma);
module.exports=User;
