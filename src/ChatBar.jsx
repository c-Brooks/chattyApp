import React from 'react';
import ReactDOM from 'react-dom';

const ChatBar = React.createClass({

  getInitialState: function() {
    return {
      username: this.props.currentUser.name,
      msgContent: ''
    }
  },

  render: function() {
    console.log(this.state);
    return (
      <footer>
        <input
          id='username'
          type='text'
          value={this.state.username}
          onChange={this.handleNameChange}
          autoComplete="off"
        />

          <input
            id='new-message'
            type='text'
            placeholder='Type a message and hit ENTER'
            value={this.state.msgContent}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleMsgChange}
            autoComplete="off"
          />
      </footer>
    );
  },

  handleKeyPress: function(event) {
    if (event.key === 'Enter') {
      this.props.onTextSubmit({
        username: this.state.username || 'Anonymous',
        msg: this.state.msgContent
      });
      this.setState({msgContent: ''});
    }
  },

  handleMsgChange: function (event) {
    this.setState({msgContent: event.target.value})
    },


  handleNameChange: function (event) {
    console.log(event.target.value);
    this.setState({username: event.target.value})
    }
  });

export default ChatBar;
