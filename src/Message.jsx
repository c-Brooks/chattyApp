import React from 'react';
import ReactDOM from 'react-dom';

const Message = React.createClass({
  render: function() {
    var message;
    console.log(this.props);
    console.log('Rendering <Message />');
    if (this.props.type === 'postMessage') {
      message = (
      <div className='message'>
        <span className='username'>
          {this.props.username}
        </span>
        <span className='content'>
          {this.props.content}
        </span>
      </div> )
    } else if (this.props.type === 'postNotification') {
      message = (
      <div className='message system'>
        <span className='username'>
          {this.props.username}
        </span>
        <span className='content'>
          {this.props.content}
        </span>
      </div> )
    }
    console.log(message);
    return message;
  }
});

export default Message;
