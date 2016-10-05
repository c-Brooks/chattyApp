import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.jsx'

const MessageList = React.createClass({
  render: function() {
    console.log('Rendering <MessageList />', this.props.messages);
    var msgs =[]
    this.props.messages.forEach((msg) => {
      msgs.push(
        <Message
        username = {msg.username}
        content  = {msg.content}
        key      = {msg.id}/> // To give each message a unique key
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
