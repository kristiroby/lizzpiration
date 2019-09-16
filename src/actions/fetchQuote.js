// const getQuote = () => {
//   fetch('https://us-central1-corded-essence-252619.cloudfunctions.net/function-1')
//   .then(handleErrors)
//   .then(response => {
//       return response.json()
//   });
// }

// export function fetchQuote() {
//   return dispatch => {
//     dispatch(fetchQuoteBegin());
//     return getQuote()
//     .then(json => {
//       dispatch(fetchQuoteSuccess(json.quote))
//       return json.quote;
//     })
//     .catch(error => 
//       dispatch(fetchQuoteFailure(error))
//     );
//   };
// }

// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }
// export const FETCH_QUOTE_BEGIN   = 'FETCH_QUOTE_BEGIN';
// export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
// export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE';

// export const fetchQuoteBegin = () => ({
//   type: FETCH_QUOTE_BEGIN
// });

// export const fetchQuoteSuccess = quote => ({
//   type: FETCH_QUOTE_SUCCESS,
//   payload: { quote }
// });

// export const fetchQuoteFailure = error => ({
//   type: FETCH_QUOTE_FAILURE,
//   payload: { error }
// });