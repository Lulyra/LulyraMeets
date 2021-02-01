import express from "express"
import http from "http"
import * as io from "socket.io"
import cors from 'cors'

const port = 4001;

const app = express();
app.use(cors());
const server = http.createServer(app); 
const socketio = new io.Server(server);

socketio.on('connect', socket => socket.on('message', (message, history) => {
    console.log("connected!")
    console.log(message)
    socketio.emit('message', message, history)
}))


server.listen(port, () => console.log(`Listening on port ${port}`));    

// rota /user
// GET pegar informação de um usuário existente
// POST Vai ser registrar.
// UPDATE editar
// DELETE deletar
/*
User= {name, password, historico, email, id}

*/