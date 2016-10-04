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
    return (
      <footer>
          <input id='username'
          type='text'
          defaultValue={this.props.currentUser.name}
          />

          <input
            id='new-message'
            type='text'
            placeholder='Type a message and hit ENTER'
            value={this.state.msgContent}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleChange}
          />
      </footer>
    );
  },

  handleKeyPress: function(event) {
    if (event.key === 'Enter') {
      this.props.onTextSubmit({
        username: this.state.username,
        msg: this.state.msgContent
      });
      this.setState({msgContent: ''});
    }
  },

  handleChange: function (event) {
    this.setState({msgContent: event.target.value})
    }
  });

export default ChatBar;
