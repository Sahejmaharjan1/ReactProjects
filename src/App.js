import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Enter Username'))
  }, [])

  useEffect(() => {
    db.collection('messages').
      orderBy('timestamp', 'desc').
      onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  })

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessages([...messages, { username: username, message: input }])
    setInput('')
  }

  return (
    <div className="App">
      <h1>This is it Guys</h1>
      <h2>Welcome {username}</h2>
      <form className="app_form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter message" value={input} onChange={event => setInput(event.target.value)} />
          <Button className='app__button' disabled={!input} variant="outlined" type='submit' onClick={sendMessage}>Send</Button>
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({ id, message }) => {
            return (
              <Message key={id} message={message} username={username} />
            );
          })
        }
      </FlipMove>
    </div>
  );
}

export default App;
