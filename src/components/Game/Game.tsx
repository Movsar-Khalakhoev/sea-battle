import React from 'react'
import { Stage } from 'react-konva'
import { StateContext } from '../../context/state.context'
import CheckeredArea from '../CheckeredArea/CheckeredArea'
import { defaultCellSideSize } from '../../variables'
import MyMap from '../MyMap/MyMap'
import RivalMap from '../RivalMap/RivalMap'

const mapSize = {
  height: 15,
  width: 27,
}

interface GameProps {}

const Game: React.FC<GameProps> = () => {
  const [gameCellSideSize, setGameCellSideSize] = React.useState(defaultCellSideSize)

  React.useEffect(() => {
    setGameCellSideSize((window.innerWidth * 0.6) / mapSize.width)
  }, [])

  return (
    <StateContext.Consumer>
      {value => (
        <Stage
          width={mapSize.width * gameCellSideSize}
          height={mapSize.height * gameCellSideSize}
          style={{ border: '1px solid red' }}
        >
          <StateContext.Provider value={value}>
            <CheckeredArea
              size={{
                width: mapSize.width * gameCellSideSize,
                height: mapSize.height * gameCellSideSize,
              }}
              cellSideSize={gameCellSideSize}
            />
            <MyMap position={{ x: 1, y: 2 }} cellSideSize={gameCellSideSize} />
            <RivalMap position={{ x: 14, y: 2 }} cellSideSize={gameCellSideSize} />
          </StateContext.Provider>
        </Stage>
      )}
    </StateContext.Consumer>
  )
}

export default Game
