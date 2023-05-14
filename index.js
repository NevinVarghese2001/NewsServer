//import express and store in a variable
const express=require("express")

//import cors
const cors=require("cors")

//import data servise
const ds=require('./dataService')

//import jswt
const jwt=require("jsonwebtoken")

//app creation
const app=express()

//integrate app with frontend
app.use(cors({origin:'http://localhost:4200'}))

//to convert all datas from json to js
app.use(express.json())



const jwtMiddleware = (req, res, next) => {

    try { //access data from request body
        const token = req.headers['access_token']

        //verify the token with secret key
        const data = jwt.verify(token, "superkey123")
        console.log(data);

        next()
    }
    catch {
        res.status(422).json({
            status: false,
            message: "please login",
            statusCode: 404
        })
    }
}


//login get
app.post("/login",(req,res)=>{
    ds.login(req.body.uname,req.body.psw).then(result=>{
        res.status(result.statusCode).json(result)
    })
    
})






app.listen(3000,()=>{
    console.log("server start at port 3000");
})