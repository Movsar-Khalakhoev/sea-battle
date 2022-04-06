import React from 'react'
import { cellSideSize, horizontalCoords, verticalCoords } from '../../variables'
import Ships from '../Map/Ships'
import { Layer } from 'react-konva'
import { _positionedShips, MyMapInitializerContext } from '../../context/myMapInitializer.context'
import { MapShip } from '../../models/Map'
import { Vector2d } from 'konva/cmj/types'

interface MapShipsProps {
  position?: Vector2d
}

const MapShips: React.FC<MapShipsProps> = ({ position }) => {
  const { mapShips, setMapShips, setPositionedShips } = React.useContext(MyMapInitializerContext)

  const onMapShipClick = (ship: MapShip) => {
    setMapShips(prev => prev.filter(sh => sh.id !== ship.id))

    const positionedShip = _positionedShips.find(sh => sh.id === ship.id)
    if (positionedShip) setPositionedShips(prev => [...prev, positionedShip])
  }

  return (
    <Layer
      x={(position?.x || 0) * cellSideSize}
      y={(position?.y || 0) * cellSideSize}
      width={(horizontalCoords.length + 1) * cellSideSize}
      height={(verticalCoords.length + 1) * cellSideSize}
    >
      <Ships mapState={{ ships: mapShips, hits: [] }} onShipClick={onMapShipClick} />
    </Layer>
  )
}

export default MapShips
