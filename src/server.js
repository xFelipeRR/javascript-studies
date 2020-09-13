const express = require('express')
const server = express()

server.use(express.static("public"))

.get("/", (req, res) => {
    server.use(express.static("public"))
    return res.send("Hi")
})
.listen(5500)