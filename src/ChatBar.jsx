import React from 'react';
import ReactDOM from 'react-dom';

var origUsername;
const ChatBar = React.createClass({

  getInitialState: function() {
    origUsername = this.props.currentUser.name;
    return {
      username: origUsername,
      userColour: this.props.currentUser.colour,
      msgContent: ''
    }
  },

  render: function() {
    return (
      <footer>
        <input
          id           = 'username'
          type         = 'text'
          value        = {this.state.username}
          onKeyPress   = {this.handleNameKeyPress}
          onChange     = {this.handleNameChange}
          autoComplete ='off'
        />

        <input
          id           = 'new-message'
          type         = 'text'
          placeholder  = 'Type a message and hit ENTER'
          value        = {this.state.msgContent}
          onKeyPress   = {this.handleMsgKeyPress}
          onChange     = {this.handleMsgChange}
          autoComplete = 'off'
        />
      </footer>
    );
  },

  handleNameKeyPress: function(event) {
    if (event.key === 'Enter') {
      this.props.onTextSubmit({
        type: 'postNotification',
        content: `${origUsername} has changed \
        their name to ${this.state.username}`
      });
      this.setState({msgContent: ''});
    }
  },

  handleMsgKeyPress: function(event) {
    if (event.key === 'Enter') {
      this.props.onTextSubmit({
        type: 'postMessage',
        username: this.state.username || 'Anonymous',
        userColour: this.state.userColour,
        content: this.state.msgContent
      });
      this.setState({msgContent: ''});
    }
  },

  handleMsgChange: function (event) {
    this.setState({msgContent: event.target.value})
    },

  handleNameChange: function (event) {
    this.setState({username: event.target.value})
    }
  });

export default ChatBar;
