import express from "express"
import http from "http"
import * as io from "socket.io"
import cors from 'cors'

const port = 4001;

const app = express();
app.use(cors());
const server = http.createServer(app); 
const socketio = new io.Server(server);

socketio.on('connect', socket => socket.on('message', ({name, message}) => {
    socketio.emit('message', {name, message})
}))


server.listen(port, () => console.log(`Listening on port ${port}`));    