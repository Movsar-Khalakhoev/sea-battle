import React from 'react'
import { Group, Rect, Text } from 'react-konva'
import { defaultCellSideSize, verticalCoords } from '../../variables'

interface VerticalAxisProps {
  cellSideSize?: number
}

const VerticalAxis: React.FC<VerticalAxisProps> = ({ cellSideSize = defaultCellSideSize }) => {
  return (
    <Group>
      {verticalCoords.map((coord, index) => (
        <Group x={0} y={cellSideSize * (index + 1)} key={index}>
          <Rect width={cellSideSize} height={cellSideSize} strokeWidth={1} stroke='red' />
          <Text
            text={coord}
            align='center'
            verticalAlign='middle'
            width={cellSideSize}
            height={cellSideSize}
            fontSize={20}
          />
        </Group>
      ))}
    </Group>
  )
}

export default VerticalAxis
