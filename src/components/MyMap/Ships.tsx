import React from 'react'
import { Group, Rect } from 'react-konva'
import { cellSideSize } from '../../variables'
import { horizontalCoords, verticalCoords } from './MyMap'
import { StateContext } from '../../context/state.context'

interface ShipsProps {}

const Ships: React.FC<ShipsProps> = () => {
  const { ships } = React.useContext(StateContext)

  return (
    <Group>
      {ships.map((ship, index) => (
        <Group x={cellSideSize} y={cellSideSize} key={index}>
          {ship.coords.map(coord => (
            <Rect
              key={coord.x + coord.y}
              x={horizontalCoords.findIndex(c => c === coord.x) * cellSideSize}
              y={verticalCoords.findIndex(c => c === coord.y) * cellSideSize}
              width={cellSideSize}
              height={cellSideSize}
              strokeWidth={1}
              stroke='red'
            />
          ))}
        </Group>
      ))}
    </Group>
  )
}

export default Ships
