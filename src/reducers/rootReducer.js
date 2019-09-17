import { combineReducers } from 'redux';
import { quote, quoteHasErrored, quoteIsLoading } from './quoteReducer';

export default combineReducers({
  quote,
  quoteHasErrored,
  quoteIsLoading
});