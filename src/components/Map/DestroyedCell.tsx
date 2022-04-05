import React from 'react'
import { MapCoord } from '../../models/Map'
import { cellSideSize } from '../../variables'
import { Group, Line, Rect } from 'react-konva'
import { horizontalCoords, verticalCoords } from './Map'

interface DestroyedCellProps {
  coord: MapCoord
}

const DestroyedCell: React.FC<DestroyedCellProps> = ({ coord }) => {
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
