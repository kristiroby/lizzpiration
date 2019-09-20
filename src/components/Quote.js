import React from 'react'
import { connect } from 'react-redux'
import { fetchQuoteData } from '../actions/fetchQuote'
import { ClassicSpinner } from "react-spinners-kit";
import Lizzo from '../components/lizzo.png';

class Quote extends React.Component {
    componentDidMount() {
      this.props.fetchQuote('https://us-central1-corded-essence-252619.cloudfunctions.net/function-1');
    }
    handleClick = () => {
      this.props.fetchQuote('https://us-central1-corded-essence-252619.cloudfunctions.net/function-1');
    } 
    render () {
      if (this.props.hasErrored) {
        return <p>There's been an error! Please try again</p>
      }
      if (this.props.isLoading) {
        return <ClassicSpinner 
                size={30}
                color="#686769"
                // loading={true}
              />
      }
      return (
        <div className='quote-container'>
          <div className="button">
          <button onClick={this.handleClick}>Get the Juice</button>
        </div>
          <div className='quote'>
            <p>{this.props.quote.quote}</p>
          </div>
          <div className='source'>
            <p>{this.props.quote.source} </p>
            <img src={Lizzo} alt="kitty cat kitty cat purrrr" height="300px" width="auto"></img>
          </div>
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    hasErrored: state.quoteHasErrored,
    isLoading: state.quoteIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuote: (url) => {
      dispatch(fetchQuoteData(url))
    }  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote);