import React from 'react';
import ReactDOM from "react-dom";

const Message = React.createClass({
  getInitialState: () => {
    return (
          <div className='test'>
            Hello world
          </div>
        );
  },

  render: function () {
    console.log('Rendering <App />');
    return (
      <div className='test'>
        Hello world
      </div>
    );
  }
});
