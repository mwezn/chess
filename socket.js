const express = require('express');
const app= express();
app.use(express.static(__dirname + '/'))
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const port = process.env.PORT || 3001

app.get("/", (req, res)=>{
    res.sendFile(__dirname +'/p2pVideo.html')
})

http.listen(port,()=>{
    console.log("Server is listening on port:"+port)
})