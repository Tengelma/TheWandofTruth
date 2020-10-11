var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)
var List = require("collections/list");
var bodyParser = require('body-parser')
const cryptoRandomString = require('crypto-random-string');
var {Room, Message} = require('./RoomResources.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var rooms = new Map();

/**
 * GET: '.../`
 * 
 */
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/rooms/:roomId/students', (req, res) => {
    var room = rooms.get(req.params.roomId);
    res.json({students : room.students});
})

/**
 * GET: '.../rooms/:roomId'
 */
app.get('/rooms/:roomId', (req, res) => {
    res.send("roomId is" + req.params.roomId);
});

/**
 * POST: '.../rooms'
 */
app.post('rooms/', (req, res) => {
    var host = req.body.host;
    var roomId = cryptoRandomString({length: 6, type: 'alphanumeric'});
    var r = new Room(roomId, host);
    rooms.set(roomId, r);
    res.location('/rooms/' + roomId);
    res.status(201).json({room : roomId});
})


io.on('connection', (socket) => {
    socket.on('create', (roomId, username) => {
        socket.join(roomId);
        socket.to(roomId).emit('message', `${username} has created room`);
    });
    socket.on('join', (roomId, username) => {
        socket.join(roomId);
        rooms.get(roomId).students.push(username);  //add student
        var messages = rooms.get(roomId).messages;
        socket.emit('load-messages', messages);
        socket.to(roomId).emit('message', `${username} has entered the room`);      
    });
    socket.on('message', (roomId, username, msg, time) => {
        socket.to(roomId).emit('message', msg);
        rooms.get(roomId).messages.push(new Message(username, msg, time));
    });
    socket.on('draw', (roomId, username, path) => {
        // TODO: do path broadcast
    });
    socket.on('disconnect', (roomId, username) => {
        console.log('user disconnected');
        socket.to(roomId).emit('message', `${username} has left`);
    });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});

