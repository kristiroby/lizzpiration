import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      quotes: {}
    }
  }

  componentDidMount() {
    fetch('https://us-central1-corded-essence-252619.cloudfunctions.net/function-1')
      .then(response => {
        return response.json()
      }).then(data => {
        this.setState({quotes: data})
      })
  }

  render () {
    return (
      <div>
        {this.state.quotes.quote} <br />
        {this.state.quotes.source}
      </div>
    )
  }
}

export default App;
