import React from 'react'
import { Group, Layer, Stage } from 'react-konva'
import { cellSideSize } from '../../variables'
import CheckeredArea from '../CheckeredArea/CheckeredArea'
import { Size } from '../../models/Size'
import { StateContext } from '../../context/state.context'
import HorizontalAxis from '../Map/HorizontalAxis'
import VerticalAxis from '../Map/VerticalAxis'
import { MapCoord, MapShip } from '../../models/Map'
import { horizontalCoords, verticalCoords } from '../Map/Map'
import PositionedShip from './PositionedShip'
import { Vector2d } from 'konva/cmj/types'
import Ships from '../Map/Ships'
import { v4 as uuidv4 } from 'uuid'

export interface MapPositionedCoord {
  x: number
  y: number
}

export interface MapPositionedShip {
  coords: MapPositionedCoord[]
  id: string
}

const position = { x: 2, y: 1 }

interface MyMapInitializerProps {}

const MyMapInitializer: React.FC<MyMapInitializerProps> = () => {
  const [size] = React.useState<Size>({
    height: cellSideSize * 21,
    width: cellSideSize * 15,
  })
  const [mapShips, setMapShips] = React.useState<MapShip[]>([])
  const [positionedShips, setPositionedShips] = React.useState(_positionedShips)
  const [conjecturalShip, setConjecturalShip] = React.useState<MapPositionedShip | null>(null)

  const onPositionedDragEnd = (index: number) => {
    if (conjecturalShip) {
      setMapShips(prev => [
        ...prev,
        { coords: translateToShipCoords(conjecturalShip.coords), destroyed: false },
      ])
      setConjecturalShip(null)
      setPositionedShips(prev => prev.filter((ship, i) => i !== index))
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
      JSON.stringify(newShip) !== JSON.stringify(sortShipCells(conjecturalShip))
    ) {
      setConjecturalShip(newShip)
    }
  }

  return (
    <StateContext.Consumer>
      {value => (
        <Stage width={size.width} height={size.height}>
          <StateContext.Provider value={value}>
            <CheckeredArea size={size} />
            <Layer
              x={(position?.x || 0) * cellSideSize}
              y={(position?.y || 0) * cellSideSize}
              width={(horizontalCoords.length + 1) * cellSideSize}
              height={(verticalCoords.length + 1) * cellSideSize}
            >
              <Ships mapState={{ ships: mapShips, hits: [] }} />
            </Layer>
            <Layer
              x={(position?.x || 0) * cellSideSize}
              y={(position?.y || 0) * cellSideSize}
              width={(horizontalCoords.length + 1) * cellSideSize}
              height={(verticalCoords.length + 1) * cellSideSize}
            >
              <HorizontalAxis />
              <VerticalAxis />
              {conjecturalShip && (
                <Group x={cellSideSize} y={cellSideSize}>
                  <PositionedShip positionedShip={conjecturalShip.coords} filled='green' />
                </Group>
              )}
            </Layer>
            <Layer x={(position?.x || 0) * cellSideSize} y={(position?.y || 0) * cellSideSize}>
              {positionedShips.map((ship, index) => (
                <PositionedShip
                  key={ship.id}
                  positionedShip={ship.coords}
                  draggable
                  onDragMove={evt => onPositionedShipDragMove(ship, evt.target.position())}
                  onDragEnd={() => onPositionedDragEnd(index)}
                />
              ))}
            </Layer>
          </StateContext.Provider>
        </Stage>
      )}
    </StateContext.Consumer>
  )
}

export default MyMapInitializer

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

const _positionedShips: MapPositionedShip[] = [
  {
    coords: [
      {
        x: 3,
        y: 13,
      },
      {
        x: 3,
        y: 14,
      },
      {
        x: 3,
        y: 15,
      },
      {
        x: 3,
        y: 16,
      },
    ],
    id: uuidv4(),
  },
  {
    coords: [
      {
        x: 5,
        y: 19,
      },
      {
        x: 6,
        y: 19,
      },
      {
        x: 7,
        y: 19,
      },
    ],
    id: uuidv4(),
  },
  {
    coords: [
      {
        x: 7,
        y: 13,
      },
      {
        x: 7,
        y: 14,
      },
      {
        x: 7,
        y: 15,
      },
    ],
    id: uuidv4(),
  },
  {
    coords: [
      {
        x: 9,
        y: 13,
      },
      {
        x: 9,
        y: 14,
      },
    ],
    id: uuidv4(),
  },
  {
    coords: [
      {
        x: 11,
        y: 13,
      },
      {
        x: 11,
        y: 14,
      },
    ],
    id: uuidv4(),
  },
  {
    coords: [
      {
        x: 11,
        y: 16,
      },
      {
        x: 11,
        y: 17,
      },
    ],
    id: uuidv4(),
  },
  {
    coords: [
      {
        x: 9,
        y: 16,
      },
    ],
    id: uuidv4(),
  },
  {
    coords: [
      {
        x: 7,
        y: 17,
      },
    ],
    id: uuidv4(),
  },
  {
    coords: [
      {
        x: 5,
        y: 17,
      },
    ],
    id: uuidv4(),
  },
  {
    coords: [
      {
        x: 3,
        y: 18,
      },
    ],
    id: uuidv4(),
  },
]
