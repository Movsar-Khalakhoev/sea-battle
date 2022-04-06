import React from 'react'
import { Stage } from 'react-konva'
import { StateContext } from '../../context/state.context'
import CheckeredArea from '../CheckeredArea/CheckeredArea'
import { cellSideSize } from '../../variables'
import MyMap from '../MyMap/MyMap'
import RivalMap from '../RivalMap/RivalMap'

interface GameProps {}

const Game: React.FC<GameProps> = () => {
  const [stageSize, setStageSize] = React.useState({
    height: 0,
    width: 0,
  })

  React.useEffect(() => {
    setStageSize({
      height: Math.floor((window.innerHeight * 0.7) / cellSideSize) * cellSideSize,
      width: Math.floor((window.innerWidth * 0.7) / cellSideSize) * cellSideSize,
    })
  }, [])

  return (
    <StateContext.Consumer>
      {value => (
        <Stage
          width={stageSize.width}
          height={stageSize.height}
          style={{ border: '1px solid red' }}
        >
          <StateContext.Provider value={value}>
            <CheckeredArea size={stageSize} />
            <MyMap position={{ x: 20, y: 5 }} />
            <RivalMap position={{ x: 31, y: 5 }} />
          </StateContext.Provider>
        </Stage>
      )}
    </StateContext.Consumer>
  )
}

export default Game
