import React from 'react';
import './App.css';
import Aside from './Aside.js';
import Quote from './Quote.js';
// import { createStore } from 'redux'
// import { create } from 'domain';

class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      quotes: {}
    }
  }

fetchQuote = () => {
  fetch('https://us-central1-corded-essence-252619.cloudfunctions.net/function-1')
      .then(response => {
        return response.json()
      }).then(data => {
        this.setState({quotes: data})
      })
  }

  componentDidMount() {
    this.fetchQuote()
    // console.log(createStore)
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
