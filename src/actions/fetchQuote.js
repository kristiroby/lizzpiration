import fetch from 'cross-fetch'

export function quoteHasErrored(bool) {
    return {
        type: 'QUOTE_HAS_ERRORED',
        hasErrored: bool
    };
}

export function quoteIsLoading(bool) {
    return {
        type: 'QUOTE_IS_LOADING',
        isLoading: bool
    };
}

export function quoteFetchSuccess(quote) {
    return {
        type: 'QUOTE_FETCH_SUCCESS',
        quote
    };
}
export function fetchQuoteData(url) {
    return (dispatch) => {
        dispatch(quoteIsLoading(true))
        fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(quoteIsLoading(false));
            return response;
        })
        .then((response) => response.json())
        .then((quote) => dispatch(quoteFetchSuccess(quote)))
        .catch(() => dispatch(quoteHasErrored(true)));
    };
}

    
      