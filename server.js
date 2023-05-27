var express = require('express') ;
app = express();
const port = process.env.PORT ;
server = app.listen(port);
app.use(express.static('public'));

console.log("Running")

var socket = require('socket.io') ; 

var io = socket(server);
io.sockets.on('connection' , newConnection) ; 

function newConnection(socket) { 
    console.log('new Connection : ' , socket.id);
    socket.on('mouse' , mouseMsg);

    function mouseMsg(data){
        socket.broadcast.emit('mouse' , data);
        // console.log(data);
    }
}
