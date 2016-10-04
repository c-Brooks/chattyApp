import React from 'react';
import ReactDOM from 'react-dom';

const ChatBar = React.createClass({
  render: function() {
    return (
      <footer>
        <input id='username'
        type='text'
        value={this.props.currentUser.name} />
        <input
          id='new-message'
          type='text'
          placeholder='Type a message and hit ENTER' />
      </footer>
    );
  },
  onTextSubmit: (e) => {
    // grabs 'value' - whatever is in text box
    e.target.value
  }
});

export default ChatBar;


function onTextSubmit() {
  console.log(this);
}
