import React from 'react';
import ReactDOM from "react-dom";

const App = React.createClass({
  getInitialState: () => {
    return (
          <div className='test'>
            Hello world
          </div>
        );
  },

  render: function () {
    return (
      <div className='test'>
        Hello world
      </div>
    );
  }
});
