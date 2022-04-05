import React from 'react'
import { Layer, Line } from 'react-konva'
import { Size } from '../../models/Size'
import { Vector2d } from 'konva/cmj/types'
import { cellSideSize } from '../../variables'

interface CheckeredAreaProps {
  size: Size
  position?: Vector2d
}

const CheckeredArea: React.FC<CheckeredAreaProps> = ({ size, position }) => {
  return (
    <Layer width={size.width} height={size.height} x={position?.x} y={position?.y}>
      {Array.from({ length: size.height / cellSideSize + 1 }).map((item, index) => (
        <Line
          key={index}
          points={[0, index * cellSideSize, size.width, index * cellSideSize]}
          stroke='blue'
          strokeWidth={1}
          opacity={0.4}
        />
      ))}
      {Array.from({ length: size.width / cellSideSize + 1 }).map((item, index) => (
        <Line
          key={index}
          points={[index * cellSideSize, 0, index * cellSideSize, size.height]}
          stroke='blue'
          strokeWidth={1}
          opacity={0.4}
        />
      ))}
    </Layer>
  )
}

export default CheckeredArea
