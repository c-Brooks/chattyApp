import React       from 'react';
import ReactDOM    from 'react-dom';
import uuid        from 'node-uuid';

import MessageList from './MessageList.jsx'
import ChatBar     from './ChatBar.jsx';



const data = {
  currentUser: {name: 'Bob'},
  messages: []
}

const App = React.createClass({

  socket: new WebSocket('ws://localhost:4000/socketserver'),

  getInitialState:  function() {
    return {
      data: data
      };
  },

  componentDidMount: function() {
    console.log('componentDidMount <App />');


    this.socket.onopen = (event) => {
      console.log('Connected');
    }

    this.socket.onmessage = (event)  => {
      const newMessage = JSON.parse(event.data);
      let newState = this.state;
      newState.data.messages.push({
        type:     newMessage.type,
        id:       newMessage.id,
        username: newMessage.username,
        content:  newMessage.content
      });
      console.log('Client recieved', newMessage);
      this.setState(newState);
    }

  },

  render: function() {
    console.log('Rendering <App />', this.state.data);
    return (
      <div>
        <MessageList messages = {this.state.data.messages} />
        <ChatBar currentUser  = {this.state.data.currentUser}
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
