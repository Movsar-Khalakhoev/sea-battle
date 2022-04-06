import React from 'react'
import { Group, Rect, Text } from 'react-konva'
import { cellSideSize, verticalCoords } from '../../variables'

interface VerticalAxisProps {}

const VerticalAxis: React.FC<VerticalAxisProps> = () => {
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
