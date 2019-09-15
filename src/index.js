import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { render } from 'react-dom';

 const store = createStore(rootReducer)
 render (
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)
serviceWorker.unregister();
