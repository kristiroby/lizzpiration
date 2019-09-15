import React from 'react'

class Quote extends React.Component {
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