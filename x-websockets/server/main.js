var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));



var messages = [
    {
        author: "Tyson",
        text: "Olá tudo bem?"
    },
    {
        author: "Pepe",
        text: "Tudo ótimo e contigo?"
    },
    {
        author: "Paco",
        text: "Top!"
    }
];

var clients = [];
var cont = -1;

io.on('connection', function(socket){
    console.log('Novo cliente ligado');
    console.log(socket.id);
    clients.push(socket.id);
    cont = cont + 1;


    //socket.emit('messages',messages);

    socket.on('new-message', function(data) {
        var mes = {author: "Ty",text: "Hey"}
        messages.push(mes);
        //io.sockets.emit('messages', messages);
        console.log(clients)
        console.log(clients[cont])
        io.to(clients[cont]).emit('messages', messages);
    });
})

server.listen(8080, function(){
    console.log('Servidor corriendo en http://localhost:8080');
});
