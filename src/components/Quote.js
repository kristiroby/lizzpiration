import React from 'react'
import { connect } from 'react-redux'
import { fetchQuoteData } from '../actions/fetchQuote'
import { ClassicSpinner } from "react-spinners-kit";
// import PropTypes from 'prop-types';

class Quote extends React.Component {
    componentDidMount() {
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
        <div className='container'>
          <h1>Lizzpiration</h1>

          <div data-test='fetchedQuote'>
            <p>{this.props.quote.quote}</p>
          </div>

          <div data-test='fetchedQuoteSource'>
            <p>{this.props.quote.source} </p>
          </div>

          <div>
            <button onClick={this.props.fetchQuote('https://us-central1-corded-essence-252619.cloudfunctions.net/function-1')} >Get the Juice</button>
          </div>

          <div>
            <img src="http://placekitten.com/g/200/300" alt="kitty cat kitty cat purrrr" height="300px" width="auto"></img>
          </div>
        </div>
      )
    }
}

// Quote.propTypes = {
//   fetchQuote: PropTypes.func.isRequired,
//   quote: PropTypes.string.isRequired,
//   hasErrored: PropTypes.bool.isRequired,
//   isLoading: PropTypes.bool.isRequired
// };

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    hasErrored: state.quoteHasErrored,
    isLoading: state.quoteIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuote: (url) => dispatch(fetchQuoteData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote);