import React from 'react';
import ReactDOM from "react-dom";

const Message = React.createClass({
  render: function() {
    console.log('Rendering <Message />');
    return (
          <div className='message'>
            <span className='username'>
              {this.props.message.username}
            </span>
            <span className='content'>
              {this.props.message.content}
            </span>
            </div>
    );
  }
});

export default Message;
