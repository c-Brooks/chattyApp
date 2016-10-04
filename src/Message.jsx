import React from 'react';
import ReactDOM from "react-dom";

const Message = React.createClass({
  render: function() {
    console.log('Rendering <Message />', this.props);
    return (
      <div className='message'>
        <span className='username'>
          {this.props.username}
        </span>
        <span className='content'>
          {this.props.content}
        </span>
      </div>
    );
  }
});

export default Message;
