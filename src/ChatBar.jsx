import React from 'react';
import ReactDOM from 'react-dom';

const ChatBar = React.createClass({

  getInitialState: function() {
    return {
      username: 'Anonymous',
      userColour: this.props.currentUser.colour,
      msgContent: ''
    }
  },

// Render chatbar with name and message input
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

// On each key press, check if it's 'Enter'
// If it is, send appropriate message and clear fields
  handleNameKeyPress: function(event) {
    if (event.key === 'Enter') {
      this.props.onTextSubmit({
        type: 'postNotification',
        username: this.state.username,
        content: `${this.props.currentUser.name || 'Anonymous'} has changed \
        their name to ${this.state.username}`
      });
      this.setState({
        msgContent: '',
        username: this.state.username
    });
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

// Update change in the input field by updating state
  handleMsgChange: function (event) {
    this.setState({msgContent: event.target.value})
    },

  handleNameChange: function (event) {
    this.setState({username: event.target.value})
    }
  });

export default ChatBar;
