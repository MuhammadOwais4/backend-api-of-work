const express = require("express");
require("dotenv").config();
const cors = require('cors')

const courceRoute = require("./routes/courseRoute")

const app = express();
app.use(express.json())
app.use(cors());

app.use("/api/cource", courceRoute)
    
app.listen(process.env.PORT);







//-----------------------------------------------------------------//
// const fs = require('fs')
// const http =require("http")

// const server = http.createServer((req , res)=>{        
//     console.log("server is listing ..........")
//     console.log("ok" , req)
// })
// server.listen(5000)
// fs.readdir("./", (err , dir)=>{
//     console.log(dir);
//     })

// fs.readFile("./ab.txt","utf-8" , (err , dir)=>{
//     console.log(dir);
//     })

// fs.writeFile("./ab.txt", "kese ho bhai", (err)=>{
//     if(err){
//         console.log(err);
//     }else {
//         console.log("ok")
//     }
// })
// fs.appendFile("./ab.txt", "  ccccccccccccccccccccccccccccckese ho bhai", (err)=>{
//     if(err){
//         console.log(err);
//     }else {
//         console.log("ok")
//     }
// })