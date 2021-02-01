import React from 'react';
import Chat from './components/Chat';
import Video from './components/Video';
import './Room.css';

function Room() {
  return (
    <div className="room">
      <Video />
      <Chat />
    </div>
  );
}

export default Room;
