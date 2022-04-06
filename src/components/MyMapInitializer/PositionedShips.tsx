import React from 'react'
import { defaultCellSideSize, horizontalCoords, verticalCoords } from '../../variables'
import PositionedShip from './PositionedShip'
import { Layer } from 'react-konva'
import { Vector2d } from 'konva/cmj/types'
import { MyMapInitializerContext } from '../../context/myMapInitializer.context'
import { MapPositionedCoord, MapPositionedShip } from './MyMapInitializer'
import Konva from 'konva'
import { MapCoord } from '../../models/Map'

interface PositionedShipsProps {
  position?: Vector2d
  cellSideSize?: number
}

const PositionedShips: React.FC<PositionedShipsProps> = ({
  position,
  cellSideSize = defaultCellSideSize,
}) => {
  const {
    mapShips,
    setMapShips,
    positionedShips,
    setPositionedShips,
    conjecturalShip,
    setConjecturalShip,
  } = React.useContext(MyMapInitializerContext)
  const positionedShipsLayerRef = React.useRef<Konva.Layer>(null)

  const onPositionedDragEnd = (id: string, index: number) => {
    if (conjecturalShip && positionedShipsLayerRef.current) {
      if (conjecturalShip.wrongPosition) {
        setConjecturalShip(null)
        positionedShipsLayerRef.current!.children![index].position({ x: 0, y: 0 })
        return
      }

      setMapShips(prev => [
        ...prev,
        {
          coords: translateToShipCoords(conjecturalShip.ship.coords),
          destroyed: false,
          id: conjecturalShip.ship.id,
        },
      ])
      setConjecturalShip(null)
      setPositionedShips(prev => prev.filter(ship => ship.id !== id))
    }
  }

  const onPositionedShipDragMove = (ship: MapPositionedShip, position: Vector2d) => {
    const firstCell = ship.coords.reduce(
      (first, sh) => (sh.y < first.y ? sh : first),
      ship.coords[0]
    )
    const isHorizontal = ship.coords.length >= 2 ? ship.coords[0].y === ship.coords[1].y : true

    const xPosition = Math.round((position.x + (firstCell.x - 1) * cellSideSize) / cellSideSize)
    const yPosition = Math.round((position.y + (firstCell.y - 1) * cellSideSize) / cellSideSize)

    const newShip = sortShipCells(ship)

    newShip.coords = newShip.coords.map((coord, index) => {
      const horizontalIndex = isHorizontal ? index : 0
      const verticalIndex = isHorizontal ? 0 : index
      const x = coord.x + (xPosition - firstCell.x)
      const y = coord.y + (yPosition - firstCell.y)
      return {
        x:
          x < 1 + horizontalIndex ||
          x >
            horizontalCoords.length + horizontalIndex - (isHorizontal ? ship.coords.length - 1 : 0)
            ? x < 1 + horizontalIndex
              ? 1 + horizontalIndex
              : horizontalCoords.length +
                horizontalIndex -
                (isHorizontal ? ship.coords.length - 1 : 0)
            : x,
        y:
          y < 1 + verticalIndex ||
          y > verticalCoords.length + verticalIndex - (isHorizontal ? 0 : ship.coords.length - 1)
            ? y < 1 + verticalIndex
              ? 1 + verticalIndex
              : verticalCoords.length + verticalIndex - (isHorizontal ? 0 : ship.coords.length - 1)
            : y,
      }
    })

    if (
      !conjecturalShip ||
      JSON.stringify(newShip) !== JSON.stringify(sortShipCells(conjecturalShip.ship))
    ) {
      const mapShipsCoords = mapShips.map(ship => translateToPositionedCoords(ship.coords))

      setConjecturalShip({
        ship: newShip,
        wrongPosition: !!mapShipsCoords.find(coords => {
          return coords.find(shipCoord =>
            newShip.coords.find(
              newShipCoord =>
                [shipCoord.y, shipCoord.y - 1, shipCoord.y + 1].includes(newShipCoord.y) &&
                [shipCoord.x, shipCoord.x - 1, shipCoord.x + 1].includes(newShipCoord.x)
            )
          )
        }),
      })
    }
  }

  const rotatePositionedShip = (id: string) => {
    setPositionedShips(prev =>
      prev.map(ship => {
        if (ship.id !== id) return ship

        const isHorizontal = ship.coords.length >= 2 ? ship.coords[0].y === ship.coords[1].y : true

        const sortedShip = sortShipCells(ship)
        return {
          ...sortedShip,
          coords: isHorizontal
            ? sortedShip.coords.map((coord, index) => ({
                x: sortedShip.coords[0].x,
                y: sortedShip.coords[0].y + index,
              }))
            : sortedShip.coords.map((coord, index) => ({
                x: sortedShip.coords[0].x + index,
                y: sortedShip.coords[0].y,
              })),
        }
      })
    )
  }

  return (
    <Layer
      x={(position?.x || 0) * cellSideSize}
      y={(position?.y || 0) * cellSideSize}
      ref={positionedShipsLayerRef}
    >
      {positionedShips.map((ship, index) => (
        <PositionedShip
          key={ship.id}
          positionedShip={ship.coords}
          cellSlideSize={cellSideSize}
          draggable
          fill={'blue'}
          onDragMove={evt => onPositionedShipDragMove(ship, evt.target.position())}
          onDragEnd={() => onPositionedDragEnd(ship.id, index)}
          onClick={() => rotatePositionedShip(ship.id)}
          onTap={() => rotatePositionedShip(ship.id)}
        />
      ))}
    </Layer>
  )
}

export default PositionedShips

const sortShipCells = (ship: MapPositionedShip) => {
  return {
    coords: ship.coords.sort((a, b) => (a.x < b.x ? -1 : 1)).sort((a, b) => (a.y < b.y ? -1 : 1)),
    id: ship.id,
  }
}

const translateToShipCoords = (coords: MapPositionedCoord[]): MapCoord[] => {
  return coords.map(coord => ({
    x: horizontalCoords[coord.x - 1],
    y: verticalCoords[coord.y - 1],
  }))
}

const translateToPositionedCoords = (coords: MapCoord[]): MapPositionedCoord[] => {
  return coords.map(coord => ({
    x: horizontalCoords.findIndex(c => c === coord.x) + 1,
    y: verticalCoords.findIndex(c => c === coord.y) + 1,
  }))
}
