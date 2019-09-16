import React from 'react';
import '../App.css';
import Aside from './Aside.js';
import Quote from './Quote.js';

class App extends React.Component {

  render () {
    return (
      <div>
        <Aside />
        <Quote />
      </div>
    )
  }
}

export default App;
