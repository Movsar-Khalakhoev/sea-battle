import React from 'react'
import { cellSideSize } from '../../variables'
import HorizontalAxis from './HorizontalAxis'
import VerticalAxis from './VerticalAxis'
import Ships from './Ships'
import MissedHits from './MissedHits'
import { Layer } from 'react-konva'
import { Vector2d } from 'konva/cmj/types'
import { IMap } from '../../models/Map'

export const horizontalCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
export const verticalCoords = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

interface MapProps {
  position?: Vector2d
  mapState: IMap
}

const Map: React.FC<MapProps> = ({ mapState, position }) => {
  return (
    <Layer x={(position?.x || 0) * cellSideSize} y={(position?.y || 0) * cellSideSize}>
      <HorizontalAxis />
      <VerticalAxis />
      <Ships mapState={mapState} />
      <MissedHits mapState={mapState} />
    </Layer>
  )
}

export default Map
