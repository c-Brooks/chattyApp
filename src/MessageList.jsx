import React from 'react';
import ReactDOM from "react-dom";
import Message from './Message.jsx'

const MessageList = React.createClass({
  render: function() {
    console.log('Rendering <MessageList />');
    var msgs =[]
    this.props.messages.forEach((msg) => {
      msgs.push(
        <Message message={msg} />
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
