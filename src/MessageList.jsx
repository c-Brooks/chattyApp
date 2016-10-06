import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.jsx'

const MessageList = React.createClass({
  render: function() {
    console.log('Rendering <MessageList />');
    var msgs =[]
    this.props.messages.forEach((msg) => {
      console.log('message type', msg.type);
      msgs.push(
        <Message
          type     = {msg.type}
          username = {msg.username}
          content  = {msg.content}
          key      = {msg.id}
        />
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
