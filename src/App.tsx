import React from 'react'
import { Stage } from 'react-konva'
import CheckeredArea from './components/CheckeredArea/CheckeredArea'
import { cellSideSize } from './variables'

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
      <Stage width={stageSize.width} height={stageSize.height} style={{ border: '1px solid red' }}>
        <CheckeredArea size={stageSize} />
      </Stage>
    </div>
  )
}

export default App
