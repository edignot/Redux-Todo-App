import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// MAKES REDUX STORE AVAILABLE TOT NAY NESTED COMPONENTS / WRAPS ARROUND BROWSER ROUTER TOO!!!
import { Provider } from 'react-redux'
// CREATES A REDUX STORE THAT HOLDS THE COMPLETE STATE TREE OF THE APP / ONLY SINGLE STORE FOR AN APP
import { createStore } from 'redux'
// ALLOWS TO VIEW STORE IN DEV TOOLS
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import App from './components/App'
import './index.css'

// CREATE STORE 
const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
