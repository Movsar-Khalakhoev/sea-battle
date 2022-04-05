import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import App from './App'
import StateContextProvider from './context/state.context'

ReactDOM.render(
  <StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </StrictMode>,
  document.getElementById('root')
)
