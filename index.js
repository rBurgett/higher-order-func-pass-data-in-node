const express = require('express');
const handleName = require('./modules/handle-name');
const Datastore = require('nedb');

const db = new Datastore();

const handleError = err => console.error(err);

const app = express();
let io;

app.use(express.static('./public'));

const port = 3300;
const server = app.listen(port, () => {
    console.log('App listening at port', server.address().port);
});

io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on('name', handleName(db, io, handleError));
});