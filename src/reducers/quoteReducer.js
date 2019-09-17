export function quoteHasErrored(state = false, action) {
    switch(action.type) {
        case 'QUOTE_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function quoteIsLoading(state = false, action) {
    switch(action.type) {
        case 'QUOTE_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function quote(state = '', action) {
    switch(action.type) {
        case 'QUOTE_FETCH_SUCCESS':
            return action.quote;

        default:
            return state;
    }
}