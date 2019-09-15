import React from 'react'

class Quote extends React.Component {
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
        } 
    render () {
        return (
          <div>
            <h1>Lizzpiration</h1>
          <div className="quote-source">
            <div className="quotelines">
              {this.state.quotes.quote}
            </div>
            <div className="quotelines">
              {this.state.quotes.source} 
            </div>
            <div>
              <button onClick={this.fetchQuote} >Get the Juice</button>
            </div>
            <div>
              <img src="http://placekitten.com/g/200/300" alt="kitty cat kitty cat purrrr" height="300px" width="auto"></img>
            </div>
          </div>
          </div>
        )
      }
}

export default Quote