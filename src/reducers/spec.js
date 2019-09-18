import { types } from '../actions/types.js';
import quoteReducer from './quoteReducer.js';

describe('Quote Reducer', () => {

    it('Should return default state', () => {
        const newState = quoteReducer(undefined, {});
        expect(newState).toEqual([])
    });

})