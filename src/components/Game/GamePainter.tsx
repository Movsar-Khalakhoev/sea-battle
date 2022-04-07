import React from 'react'
import { Stage } from 'react-konva'
import { StateContext } from '../../context/state.context'
import CheckeredArea from '../CheckeredArea/CheckeredArea'
import MyMap from '../MyMap/MyMap'
import RivalMap from '../RivalMap/RivalMap'
import { defaultCellSideSize } from '../../variables'

export const mapSize = {
  height: 15,
  width: 27,
}

interface GamePainterProps {
  containerWidth: number
}

const GamePainter: React.FC<GamePainterProps> = ({ containerWidth }) => {
  const [gameCellSideSize, setGameCellSideSize] = React.useState(defaultCellSideSize)

  React.useEffect(() => {
    setGameCellSideSize((containerWidth * 0.6) / mapSize.width)
  }, [containerWidth])

  return (
    <StateContext.Consumer>
      {value => (
        <Stage width={mapSize.width * gameCellSideSize} height={mapSize.height * gameCellSideSize}>
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

export default GamePainter
