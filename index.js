require("dotenv").config()
const express = require("express")
const cors = require("cors")
const server = express()
const PORT = process.env.PORT || 3000

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.get ("/", async(req, res) => {
    res.send("This is response")
})

server.all("*", async(req, res) => {
    res.json({
        message : "Route you're looking is not found"
    })
})

server.listen(PORT, "0.0.0.0", () => {
    console.log(`server is already runing at ${PORT}` )
})