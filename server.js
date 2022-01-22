const express = require("express")
const socket = require("socket.io")
const app = express()
let server = app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

let io = socket(server)

io.on("connection",(socket)=>{
    console.log("Hello")
})
