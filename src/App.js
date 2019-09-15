import React from 'react';
import './App.css';
import Aside from './Aside.js';
import Quote from './Quote.js';

class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      quotes: {}
    }
  }


  
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