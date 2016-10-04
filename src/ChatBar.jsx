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
            onChange={this.handleChange}
          />
      </footer>
    );
  },

  handleChange: function (event) {
    console.log(event);
    this.setState({msgContent: event.target.value});
  }
});
export default ChatBar;
