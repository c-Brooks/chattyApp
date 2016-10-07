import React       from 'react';
import ReactDOM    from 'react-dom';
import uuid        from 'node-uuid';

import MessageList from './MessageList.jsx'
import ChatBar     from './ChatBar.jsx';



//               blue       purple      red       green
var colours = ['#0066ff', '#9900cc', '#e60000', '#2d862d']


const App = React.createClass({

  socket: new WebSocket('ws://localhost:4000/socketserver'),

// Assign a random colour to the user
  getInitialState:  function() {
    return {
      currentUser: { name: '', colour:colours[getRandInt(colours.length-1)] },
      messages: []
    };
  },

  componentDidMount: function() {
    console.log('componentDidMount <App />');

    this.socket.onopen = (event) => {
      console.log('Connected');
    }

    // Every time a message is recieved, display it based on its type
    this.socket.onmessage = (event)  => {
      const newMessage = JSON.parse(event.data);

      // Logic to deal with 'special' messages
      if (newMessage.type === 'userCountChanged') {
        this.setState({numUsers: newMessage.content})
      } else {
      let newState = this.state;
      if (newMessage.type === 'postNotification') {
        newState.currentUser.name = newMessage.username;
        newMessage.username = '';
      }
      // Push message onto an array and setState to render it
      // This code is run on every message type except userCountChanged
        newState.messages.push({
          type:        newMessage.type,
          id:          newMessage.id,
          username:    newMessage.username,
          userColour:  newMessage.userColour,
          content:     newMessage.content
        });
        console.log('Client recieved', newMessage);
        this.setState(newState);
      }
    }
  },

  render: function() {
    console.log('Rendering <App />');
    return (
      <div>
      <nav>
        <p id='title'>Chatty</p>
        <p id='numUsers'> {this.state.numUsers} users online </p>
      </nav>

      <MessageList messages = {this.state.messages} />
      <ChatBar currentUser  = {this.state.currentUser}
               onTextSubmit = {this.sendMessage} />
      </div>
    );
  },

  // Send a message to the server with a uuid
  sendMessage: function(newMessage) {
    console.log('newMessage', newMessage);
    newMessage.id = uuid.v1();
    this.socket.send(JSON.stringify(newMessage));
  }
});

export default App;


function getRandInt(maxVal) {
  return Math.floor(Math.random()*maxVal);
}
