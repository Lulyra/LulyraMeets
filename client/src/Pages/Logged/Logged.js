import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:4001');

function Logged() {
  const [state, setState] = useState({ message: '', name: '' });
  const [chat, setChat] = useState([]);

  const renderChat = () => chat.map(({ name, message, index }) => (
    <div key={index}>
      <h3>
        {name}
        :
        <span>{message}</span>
      </h3>
    </div>
  ));

  const onTextChange = (e) => setState({ ...state, [e.target.name]: e.target.value });

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { name, message } = state;
    socket.emit('message', { name, message });
  };
  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
  }, [chat]);
  return (
    <div>
      <form>
        <h1>Messenger</h1>
        <div>Name:</div>
        <div><input name="name" onChange={onTextChange} value={state.name} /></div>
        <div>Message:</div>
        <div><input name="message" onChange={onTextChange} value={state.text} /></div>
        <button onClick={onMessageSubmit} type="button">Send a message.</button>
      </form>
      <div>
        <h1>Chat Log.</h1>
        {renderChat()}
      </div>
    </div>
  );
}

export default Logged;
