import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import App from './App'
import StateContextProvider from './context/state.context'
import MyMapInitializerContextProvider from './context/myMapInitializer.context'

ReactDOM.render(
  <StrictMode>
    <StateContextProvider>
      <MyMapInitializerContextProvider>
        <App />
      </MyMapInitializerContextProvider>
    </StateContextProvider>
  </StrictMode>,
  document.getElementById('root')
)
