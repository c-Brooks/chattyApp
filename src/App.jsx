import React       from 'react';
import ReactDOM    from 'react-dom';
import MessageList from './MessageList.jsx'
import ChatBar     from './ChatBar.jsx';



const data = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      username: "Anonymous",
      content: "No, I think you lost them. \
      You lost your marbles Bob. You lost them for good."
    }
  ]
};


const App = React.createClass({

  getInitialState:  function() {
    console.log('app initial state', this);
    return data;
  },

  componentDidMount: function() {
    this.setState(data);
  },

  render: function() {
    console.log('Rendering <App />', this);
    return (
      <div>
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser}/>
      </div>
    );
  }
});

export default App;
