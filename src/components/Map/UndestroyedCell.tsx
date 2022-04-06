import React from 'react'
import { defaultCellSideSize, horizontalCoords, verticalCoords } from '../../variables'
import { Rect } from 'react-konva'
import { MapCoord } from '../../models/Map'

interface UndestroyedCellProps {
  coord: MapCoord
  cellSideSize?: number
  fill?: string
}

const UndestroyedCell: React.FC<UndestroyedCellProps> = ({
  coord,
  cellSideSize = defaultCellSideSize,
  fill,
}) => {
  return (
    <Rect
      key={coord.x + coord.y}
      x={horizontalCoords.findIndex(c => c === coord.x) * cellSideSize}
      y={verticalCoords.findIndex(c => c === coord.y) * cellSideSize}
      width={cellSideSize}
      height={cellSideSize}
      strokeWidth={1}
      stroke='red'
      fill={fill}
    />
  )
}

export default UndestroyedCell
