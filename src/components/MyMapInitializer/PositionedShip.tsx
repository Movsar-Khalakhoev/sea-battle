import React from 'react'
import { MapPositionedCoord } from './MyMapInitializer'
import { Group, Rect } from 'react-konva'
import { cellSideSize } from '../../variables'

interface PositionedShipProps {
  positionedShip: MapPositionedCoord[]
}

const PositionedShip: React.FC<PositionedShipProps> = ({ positionedShip }) => {
  return (
    <Group draggable>
      {positionedShip.map(coord => (
        <Rect
          x={(coord.x - 1) * cellSideSize}
          y={(coord.y - 1) * cellSideSize}
          height={cellSideSize}
          width={cellSideSize}
          strokeWidth={1}
          stroke='red'
        />
      ))}
    </Group>
  )
}

export default PositionedShip
