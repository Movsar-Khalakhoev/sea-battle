import React from 'react'
import { defaultCellSideSize, horizontalCoords, verticalCoords } from '../../variables'
import HorizontalAxis from './HorizontalAxis'
import VerticalAxis from './VerticalAxis'
import Ships from './Ships'
import MissedHits from './MissedHits'
import { Layer, Rect } from 'react-konva'
import { Vector2d } from 'konva/cmj/types'
import { IMap } from '../../models/Map'
import { getCssVariable } from '../../utils/cssVariables'

interface MapProps {
  position?: Vector2d
  mapState: IMap
  cellSideSize?: number
}

const Map: React.FC<MapProps> = ({ mapState, position, cellSideSize = defaultCellSideSize }) => {
  return (
    <Layer x={(position?.x || 0) * cellSideSize} y={(position?.y || 0) * cellSideSize}>
      <HorizontalAxis cellSideSize={cellSideSize} />
      <VerticalAxis cellSideSize={cellSideSize} />
      <Rect
        x={cellSideSize}
        y={cellSideSize}
        width={horizontalCoords.length * cellSideSize}
        height={verticalCoords.length * cellSideSize}
        stroke={getCssVariable('--blue')}
        strokeWidth={3}
      />
      <Ships mapState={mapState} cellSideSize={cellSideSize} />
      <MissedHits mapState={mapState} cellSideSize={cellSideSize} />
    </Layer>
  )
}

export default Map
