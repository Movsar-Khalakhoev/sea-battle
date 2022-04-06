import React, { ComponentProps } from 'react'
import { MapPositionedCoord } from './MyMapInitializer'
import { Group, Rect } from 'react-konva'
import { cellSideSize } from '../../variables'

interface PositionedShipProps extends ComponentProps<typeof Group> {
  positionedShip: MapPositionedCoord[]
  filled?: boolean
}

const PositionedShip: React.FC<PositionedShipProps> = ({ positionedShip, filled, ...props }) => {
  return (
    <Group {...props}>
      {positionedShip.map(coord => (
        <Rect
          key={coord.x + coord.y}
          x={(coord.x - 1) * cellSideSize}
          y={(coord.y - 1) * cellSideSize}
          height={cellSideSize}
          width={cellSideSize}
          strokeWidth={1}
          stroke='red'
          opacity={filled ? 0.3 : undefined}
          fill={filled ? 'red' : undefined}
        />
      ))}
    </Group>
  )
}

export default PositionedShip
