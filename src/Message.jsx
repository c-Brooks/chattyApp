import React from 'react';
import ReactDOM from "react-dom";

const Message = React.createClass({
  render: function() {
    console.log('Rendering <Message />');
    return (
      <div id='message-list'>
        <div className='message'>
          <span className='username'>
            Anonymous1
          </span>
          <span className='content'>
            "I won't be impressed with technology until I can download food."
          </span>
          </div>
          <span className='message system'>
            Anon changed their name
          </span>
        </div>
    );
  }
});

export default Message;
