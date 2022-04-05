import React from 'react'
import { cellSideSize } from './variables'
import MyMapInitializer from './components/MyMapInitializer/MyMapInitializer'

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
      <MyMapInitializer />
      {/*<StateContext.Consumer>*/}
      {/*  {value => (*/}
      {/*    <Stage*/}
      {/*      width={stageSize.width}*/}
      {/*      height={stageSize.height}*/}
      {/*      style={{ border: '1px solid red' }}*/}
      {/*    >*/}
      {/*      <StateContext.Provider value={value}>*/}
      {/*        <CheckeredArea size={stageSize} />*/}
      {/*        <MyMap position={{ x: 20, y: 5 }} />*/}
      {/*        <RivalMap position={{ x: 31, y: 5 }} />*/}
      {/*      </StateContext.Provider>*/}
      {/*    </Stage>*/}
      {/*  )}*/}
      {/*</StateContext.Consumer>*/}
    </div>
  )
}

export default App
