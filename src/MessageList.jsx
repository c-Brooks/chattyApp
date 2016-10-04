import React from 'react';
import ReactDOM from "react-dom";
import Message from './Message.jsx'

const MessageList = React.createClass({
  render: function() {
    console.log('Rendering <MessageList />');
    var msgs =[]
    this.props.messages.forEach((msg, i) => {
      msgs.push(
        <Message
        username = {msg.username}
        content  = {msg.content}
        key      = {i}/> // To give each message a unique key
      )
    });

    return (
      <div id='message-list'>
        {msgs}
      </div>
    );
  }
});

export default MessageList;
