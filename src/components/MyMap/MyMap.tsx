import React from 'react'
import { Layer } from 'react-konva'
import { cellSideSize } from '../../variables'
import { Vector2d } from 'konva/cmj/types'
import VerticalAxis from './VerticalAxis'
import HorizontalAxis from './HorizontalAxis'
import Ships from './Ships'
import MissedHits from './MissedHits'

export const horizontalCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
export const verticalCoords = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

interface MyMapProps {
  position?: Vector2d
}

const MyMap: React.FC<MyMapProps> = ({ position }) => {
  return (
    <Layer x={(position?.x || 0) * cellSideSize} y={(position?.y || 0) * cellSideSize}>
      <HorizontalAxis />
      <VerticalAxis />
      <Ships />
      <MissedHits />
    </Layer>
  )
}

export default MyMap
