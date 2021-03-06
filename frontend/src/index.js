import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import driverReducer from './reducers/driverReducer'
import tripReducer from './reducers/tripReducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({driverReducer, trips: tripReducer, currentUser: userReducer})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
