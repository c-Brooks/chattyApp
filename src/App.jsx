import React       from 'react';
import ReactDOM    from 'react-dom';
import uuid        from 'node-uuid';

import MessageList from './MessageList.jsx'
import ChatBar     from './ChatBar.jsx';



//               blue       purple      red       green
var colours = ['#0066ff', '#9900cc', '#e60000', '#2d862d']


const App = React.createClass({

  socket: new WebSocket('ws://localhost:4000/socketserver'),

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

    this.socket.onmessage = (event)  => {

      const newMessage = JSON.parse(event.data);

      if (newMessage.type === 'userCountChanged') {
        this.setState({numUsers: newMessage.content})
      }
      else {
        let newState = this.state;
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
    console.log('Rendering <App />', this.state);
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

  sendMessage: function(newMessage) {
    // Send the message to the server with a uuid
    console.log('newMessage', newMessage);
    newMessage.id = uuid.v1();
    this.socket.send(JSON.stringify(newMessage));
  }

});

export default App;


function getRandInt(maxVal) {
  return Math.floor(Math.random()*maxVal);
}
