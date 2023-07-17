import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
// import CounterProvider from './context/CounterContext'
// import ProductProvider from './context/PoductContext'
import {Provider} from 'react-redux'
import 'skeleton-css/css/skeleton.css';
import store from './store'
ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
