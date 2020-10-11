var List = require("collections/list");

class Room {
    id;
    host;
    students;
    messages;

    constructor(id, host) {
        this.id = id;
        this.host = host;
        this.students = new List();
        this.messages = new List();
    }
}

class Message {
    username;
    content;
    timestamp;

    constructor(username, content, timestamp) {
        this.content = content;
        this.username = username;
        this.timestamp = timestamp;
    }
}


exports.Room = Room;
exports.Message = Message;