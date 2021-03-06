import React from 'react'
import { MapCoord } from '../../models/Map'
import { defaultCellSideSize, horizontalCoords, verticalCoords } from '../../variables'
import { Group, Line, Rect } from 'react-konva'

interface DestroyedCellProps {
  coord: MapCoord
  cellSideSize?: number
  fill?: string
}

const DestroyedCell: React.FC<DestroyedCellProps> = ({
  coord,
  cellSideSize = defaultCellSideSize,
  fill,
}) => {
  return (
    <Group
      x={horizontalCoords.findIndex(c => c === coord.x) * cellSideSize}
      y={verticalCoords.findIndex(c => c === coord.y) * cellSideSize}
      width={cellSideSize}
      height={cellSideSize}
    >
      <Rect
        key={coord.x + coord.y}
        width={cellSideSize}
        height={cellSideSize}
        strokeWidth={1}
        stroke='red'
        fill={fill}
      />
      <Line points={[0, 0, cellSideSize, cellSideSize]} strokeWidth={1} stroke='red' />
      <Line
        points={[cellSideSize / 2, 0, cellSideSize, cellSideSize / 2]}
        strokeWidth={1}
        stroke='red'
      />
      <Line
        points={[0, cellSideSize / 2, cellSideSize / 2, cellSideSize]}
        strokeWidth={1}
        stroke='red'
      />
      <Line points={[cellSideSize, 0, 0, cellSideSize]} strokeWidth={1} stroke='red' />
      <Line points={[cellSideSize / 2, 0, 0, cellSideSize / 2]} strokeWidth={1} stroke='red' />
      <Line
        points={[cellSideSize, cellSideSize / 2, cellSideSize / 2, cellSideSize]}
        strokeWidth={1}
        stroke='red'
      />
    </Group>
  )
}

export default DestroyedCell
