import React       from 'react';
import ReactDOM    from 'react-dom';
import MessageList from './MessageList.jsx'
import ChatBar     from './ChatBar.jsx';

const App = React.createClass({
  render: () => {
    console.log('Rendering <App />');
    return (
      <div>
        <nav>
          <h1>Chatty</h1>
        </nav>
          <MessageList />
          <ChatBar />
      </div>
    );
  }
});

export default App;
