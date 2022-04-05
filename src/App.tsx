import React from 'react'
import { Stage } from 'react-konva'
import CheckeredArea from './components/CheckeredArea/CheckeredArea'
import { cellSideSize } from './variables'
import MyMap from './components/MyMap/MyMap'
import { StateContext } from './context/state.context'

function App() {
  const appRef = React.useRef<HTMLDivElement>(null)
  const [stageSize, setStageSize] = React.useState({
    height: 0,
    width: 0,
  })

  React.useEffect(() => {
    if (appRef.current) {
      setStageSize({
        height: Math.floor((appRef.current.clientHeight * 0.7) / cellSideSize) * cellSideSize,
        width: Math.floor((appRef.current.clientWidth * 0.7) / cellSideSize) * cellSideSize,
      })
    }
  }, [])

  return (
    <div className='app' ref={appRef}>
      <StateContext.Consumer>
        {value => (
          <Stage
            width={stageSize.width}
            height={stageSize.height}
            style={{ border: '1px solid red' }}
          >
            <StateContext.Provider value={value}>
              <CheckeredArea size={stageSize} />
              <MyMap position={{ x: 5, y: 5 }} />
            </StateContext.Provider>
          </Stage>
        )}
      </StateContext.Consumer>
    </div>
  )
}

export default App
