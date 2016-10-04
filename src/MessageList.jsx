import React from 'react';
import ReactDOM from "react-dom";
import Message from './Message.jsx'

const MessageList = React.createClass({
  render: function() {
    console.log('Rendering <MessageList />');
    return (
      <Message />
    );
  }
});

export default MessageList;
