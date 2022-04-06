import React, { ComponentProps } from 'react'
import { MapPositionedCoord } from './MyMapInitializer'
import { Group, Rect } from 'react-konva'
import { defaultCellSideSize } from '../../variables'

interface PositionedShipProps extends ComponentProps<typeof Group> {
  positionedShip: MapPositionedCoord[]
  filled?: string
  cellSlideSize?: number
}

const PositionedShip: React.FC<PositionedShipProps> = ({
  positionedShip,
  filled,
  cellSlideSize = defaultCellSideSize,
  ...props
}) => {
  return (
    <Group {...props}>
      {positionedShip.map(coord => (
        <Rect
          key={coord.x + coord.y}
          x={(coord.x - 1) * cellSlideSize}
          y={(coord.y - 1) * cellSlideSize}
          height={cellSlideSize}
          width={cellSlideSize}
          strokeWidth={1}
          stroke='red'
          opacity={filled ? 0.3 : undefined}
          fill={filled}
        />
      ))}
    </Group>
  )
}

export default PositionedShip
