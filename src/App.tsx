import React from 'react'
import MyMapInitializer from './components/MyMapInitializer/MyMapInitializer'
import { StateContext } from './context/state.context'
import Game from './components/Game/Game'

function App() {
  const { step } = React.useContext(StateContext)

  return (
    <div className='app'>
      {step === 'initializer' && <MyMapInitializer />}
      {step === 'game' && <Game />}
    </div>
  )
}

export default App
