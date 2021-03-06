import React from 'react'
import { defaultCellSideSize, horizontalCoords, verticalCoords } from '../../variables'
import { Group, Layer } from 'react-konva'
import PositionedShip from './PositionedShip'
import { Vector2d } from 'konva/cmj/types'
import { MyMapInitializerContext } from '../../context/myMapInitializer.context'

interface ConjecturalShipProps {
  position?: Vector2d
  cellSideSize?: number
}

const ConjecturalShip: React.FC<ConjecturalShipProps> = ({
  position,
  cellSideSize = defaultCellSideSize,
}) => {
  const { conjecturalShip } = React.useContext(MyMapInitializerContext)

  return (
    <Layer
      x={(position?.x || 0) * cellSideSize}
      y={(position?.y || 0) * cellSideSize}
      width={(horizontalCoords.length + 1) * cellSideSize}
      height={(verticalCoords.length + 1) * cellSideSize}
    >
      {conjecturalShip && (
        <Group x={cellSideSize} y={cellSideSize}>
          <PositionedShip
            positionedShip={conjecturalShip.ship.coords}
            fill={conjecturalShip.wrongPosition ? 'red' : 'green'}
            cellSlideSize={cellSideSize}
          />
        </Group>
      )}
    </Layer>
  )
}

export default ConjecturalShip
