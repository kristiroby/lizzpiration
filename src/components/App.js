import React from 'react';
import '../App.css';
import Aside from './Aside.js';
import Quote from './Quote.js';


class App extends React.Component {
  
  render () {
    return (
      <div className='center'>
        <Aside />
        <div>
          <h1>Lizzpiration</h1>
          
        </div>
        <Quote />
      </div>
    )
  }
}

export default App;