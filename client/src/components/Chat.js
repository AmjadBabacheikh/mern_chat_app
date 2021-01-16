import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = 'http://localhost:5000';
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT); // target connect event and a socket get created
    setName(name);
    setRoom(room);
    socket.emit('join', { name, room });
  }, [ENDPOINT, location]);
  return (
    <div>
      <h1>Chat</h1>
    </div>
  );
};

export default Chat;
