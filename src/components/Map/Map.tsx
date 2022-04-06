import React from 'react'
import { defaultCellSideSize } from '../../variables'
import HorizontalAxis from './HorizontalAxis'
import VerticalAxis from './VerticalAxis'
import Ships from './Ships'
import MissedHits from './MissedHits'
import { Layer } from 'react-konva'
import { Vector2d } from 'konva/cmj/types'
import { IMap } from '../../models/Map'

interface MapProps {
  position?: Vector2d
  mapState: IMap
}

const Map: React.FC<MapProps> = ({ mapState, position }) => {
  return (
    <Layer
      x={(position?.x || 0) * defaultCellSideSize}
      y={(position?.y || 0) * defaultCellSideSize}
    >
      <HorizontalAxis />
      <VerticalAxis />
      <Ships mapState={mapState} />
      <MissedHits mapState={mapState} />
    </Layer>
  )
}

export default Map
