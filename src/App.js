import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      lizzoQuotes: lizzoQuotes,
      quote: '',
      source: ''
      // }
    }
  }

  // fetch(https://us-central1-corded-essence-252619.cloudfunctions.net/function-1)

  render () {
    return (
      <div>
        {this.state.lizzoQuotes[0].quote}
      </div>
    )
  }
}

export default App;
