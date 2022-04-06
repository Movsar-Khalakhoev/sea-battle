import React from 'react'
import { Group, Rect, Text } from 'react-konva'
import { defaultCellSideSize, horizontalCoords } from '../../variables'

interface HorizontalAxisProps {
  cellSideSize?: number
}

const HorizontalAxis: React.FC<HorizontalAxisProps> = ({ cellSideSize = defaultCellSideSize }) => {
  return (
    <Group>
      {horizontalCoords.map((coord, index) => (
        <Group x={cellSideSize * (index + 1)} y={0} key={index}>
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

export default HorizontalAxis
