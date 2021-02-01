import React, { useState, useEffect } from 'react';
import nextId from 'react-id-generator';
import io from 'socket.io-client';
import '../styles/Chat.css';

const socket = io.connect('http://localhost:4001');

function Chat() {
  const [state, setState] = useState({ text: '' });
  const [chat, setChat] = useState([{ text: '' }]);

  const renderChat = () => chat.map((message) => (
    <div key={nextId()}>
      {message.text}
    </div>
  ));
  const onTextChange = (event) => setState({ ...state, [event.target.name]: event.target.value });

  const onMessageSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', state, chat);
  };
  useEffect(() => {
    socket.on('message', (message, history) => {
      setChat([...history, message]);
    });
  }, []);
  return (
    <div className="chat">
      <div className="display">{renderChat()}</div>
      <div className="inputs">
        <input className="textInput" name="text" onChange={onTextChange} type="text" />
        <button type="button" onClick={onMessageSubmit} className="sendButton">Send</button>
      </div>
    </div>
  );
}

export default Chat;
