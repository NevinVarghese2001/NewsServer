const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/projectServer",{useNewUrlParser:true})

const User=mongoose.model("User",
{
    uname:String,
    email:String,
    password:String
    
})