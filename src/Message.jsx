import React from 'react';
import ReactDOM from 'react-dom';

const Message = React.createClass({
  render: function() {
    var message;
    console.log('Rendering <Message />', this.props);
    if (this.props.type === 'postMessage') {
      message = (
      <div className='message'>
        <span className='username' style={{color:this.props.userColour}}>
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
    return message;
  }
});

export default Message;
