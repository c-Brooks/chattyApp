import React       from 'react';
import ReactDOM    from 'react-dom';
import uuid        from 'node-uuid';

import MessageList from './MessageList.jsx'
import ChatBar     from './ChatBar.jsx';



const data = {
  currentUser: {name: 'Bob'},
  messages: [
    {
      username: 'Bob',
      content: 'Has anyone seen my marbles?',
    },
    {
      username: 'Anonymous',
      content: 'No, I think you lost them. \
      You lost your marbles Bob. You lost them for good.'
    }
  ]
};


const App = React.createClass({

  socket: new WebSocket('ws://localhost:4000/socketserver'),

  getInitialState:  function() {
    return {
      data: data
      };
  },

  componentDidMount: function() {

    this.socket.onmessage = function (event) {
      const message = JSON.parse(event.data)
      console.log('Client recieved', message);
    }

    console.log(this.state);
    this.socket.onopen = (event) => {
      console.log('Connected');
    }

    console.log('componentDidMount <App />');
  
  },

  render: function() {
    console.log('Rendering <App />');
    return (
      <div>
        <MessageList messages={this.state.data.messages}/>
        <ChatBar currentUser={this.state.data.currentUser}
                 onTextSubmit={this.sendMessage}/>
      </div>
    );
  },

  sendMessage: function(newMessage) {

    this.socket.send(JSON.stringify(newMessage));

    this.state.data.messages.push({
      id: this.state.data.messages.length,
      username: newMessage.username,
      content:  newMessage.msg
    });
    console.log('Messages:', this.state.data.messages);
    this.setState({data: this.state.data})
  },

});

export default App;
