import React from 'react'
import { defaultCellSideSize, horizontalCoords, verticalCoords } from '../../variables'
import { Rect } from 'react-konva'
import { MapCoord } from '../../models/Map'

interface UndestroyedCellProps {
  coord: MapCoord
  cellSideSize?: number
}

const UndestroyedCell: React.FC<UndestroyedCellProps> = ({
  coord,
  cellSideSize = defaultCellSideSize,
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
    />
  )
}

export default UndestroyedCell
