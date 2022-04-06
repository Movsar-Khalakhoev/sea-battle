import React from 'react'
import { Group, Layer, Rect, Stage } from 'react-konva'
import { cellSideSize } from '../../variables'
import CheckeredArea from '../CheckeredArea/CheckeredArea'
import { Size } from '../../models/Size'
import { StateContext } from '../../context/state.context'
import HorizontalAxis from '../Map/HorizontalAxis'
import VerticalAxis from '../Map/VerticalAxis'
import { IMap, MapCoord } from '../../models/Map'
import { horizontalCoords, verticalCoords } from '../Map/Map'
import PositionedShip from './PositionedShip'
import { Vector2d } from 'konva/cmj/types'
import Konva from 'konva'

export interface MapPositionedCoord {
  x: number
  y: number
}

const position = { x: 2, y: 1 }

interface MyMapInitializerProps {}

const MyMapInitializer: React.FC<MyMapInitializerProps> = () => {
  const [size] = React.useState<Size>({
    height: cellSideSize * 21,
    width: cellSideSize * 15,
  })
  const rectStage = React.useRef<Konva.Rect>(null)
  const [ships, setShips] = React.useState(defaultMap.ships)
  const [editableShip, setEditableShip] = React.useState<MapPositionedCoord[] | null>(null)
  const [conjecturalShip, setConjecturalShip] = React.useState<MapPositionedCoord[]>([])

  const onPositionedShipDragMove = (ship: MapPositionedCoord[], position: Vector2d) => {
    const firstCell = ship.reduce((first, sh) => (sh.y < first.y ? sh : first), ship[0])
    const isHorizontal = ship.length >= 2 ? ship[0].y === ship[1].y : true

    const xPosition = Math.round((position.x + (firstCell.x - 1) * cellSideSize) / cellSideSize)
    const yPosition = Math.round((position.y + (firstCell.y - 1) * cellSideSize) / cellSideSize)

    const newShip = sortShipCells(ship).map((coord, index) => {
      const horizontalIndex = isHorizontal ? index : 0
      const verticalIndex = isHorizontal ? 0 : index
      const x = coord.x + (xPosition - firstCell.x)
      const y = coord.y + (yPosition - firstCell.y)
      return {
        x:
          x < 1 + horizontalIndex ||
          x > horizontalCoords.length + horizontalIndex - (isHorizontal ? ship.length - 1 : 0)
            ? x < 1 + horizontalIndex
              ? 1 + horizontalIndex
              : horizontalCoords.length + horizontalIndex - (isHorizontal ? ship.length - 1 : 0)
            : x,
        y:
          y < 1 + verticalIndex ||
          y > verticalCoords.length + verticalIndex - (isHorizontal ? 0 : ship.length - 1)
            ? y < 1 + verticalIndex
              ? 1 + verticalIndex
              : verticalCoords.length + verticalIndex - (isHorizontal ? 0 : ship.length - 1)
            : y,
      }
    })

    if (JSON.stringify(newShip) !== JSON.stringify(sortShipCells(conjecturalShip))) {
      setConjecturalShip(newShip)
    }
  }

  return (
    <StateContext.Consumer>
      {value => (
        <Stage width={size.width} height={size.height}>
          <StateContext.Provider value={value}>
            <CheckeredArea size={size} />
            <Layer x={cellSideSize} y={cellSideSize}>
              {editableShip && (
                <Group
                  onClick={() => {
                    setShips(prev => [
                      ...prev,
                      { coords: translateToShipCoords(editableShip), destroyed: false },
                    ])
                    setEditableShip(null)
                  }}
                >
                  <PositionedShip positionedShip={editableShip} />
                </Group>
              )}
            </Layer>
            <Layer
              x={(position?.x || 0) * cellSideSize}
              y={(position?.y || 0) * cellSideSize}
              width={(horizontalCoords.length + 1) * cellSideSize}
              height={(verticalCoords.length + 1) * cellSideSize}
            >
              <Group x={cellSideSize} y={cellSideSize}>
                <PositionedShip positionedShip={conjecturalShip} filled />
              </Group>
            </Layer>
            <Layer x={(position?.x || 0) * cellSideSize} y={(position?.y || 0) * cellSideSize}>
              <HorizontalAxis />
              <VerticalAxis />
              <Rect
                ref={rectStage}
                x={0}
                y={0}
                width={(horizontalCoords.length + 1) * cellSideSize}
                height={(verticalCoords.length + 1) * cellSideSize}
                strokeWidth={1}
                stroke='blue'
              />
              {positionedShips.map((ship, index) => (
                <PositionedShip
                  key={index}
                  positionedShip={ship}
                  draggable
                  onDragMove={evt => onPositionedShipDragMove(ship, evt.target.position())}
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

const translateToPositionedCoordsAndMoveToStart = (coords: MapCoord[]): MapPositionedCoord[] => {
  const positionedCoords = coords.map(coord => ({
    x: horizontalCoords.findIndex(x => x === coord.x) + 1,
    y: verticalCoords.findIndex(y => y === coord.y) + 1,
  }))
  const minYCoord = positionedCoords.reduce((min, coord) => Math.min(min, coord.y), 10000000000)
  const minXCoord = positionedCoords.reduce((min, coord) => Math.min(min, coord.x), 10000000000)

  return positionedCoords.map(coord => ({
    x: coord.x - minXCoord + 1,
    y: coord.y - minYCoord + 1,
  }))
}

const sortShipCells = (coords: MapPositionedCoord[]) => {
  return coords.sort((a, b) => (a.x < b.x ? -1 : 1)).sort((a, b) => (a.y < b.y ? -1 : 1))
}

const translateToShipCoords = (coords: MapPositionedCoord[]): MapCoord[] => {
  return coords.map(coord => ({
    x: horizontalCoords[coord.x - 1],
    y: verticalCoords[coord.y - 1],
  }))
}

const positionedShips: MapPositionedCoord[][] = [
  [
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
  [
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
  [
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
  [
    {
      x: 9,
      y: 13,
    },
    {
      x: 9,
      y: 14,
    },
  ],
  [
    {
      x: 11,
      y: 13,
    },
    {
      x: 11,
      y: 14,
    },
  ],
  [
    {
      x: 11,
      y: 16,
    },
    {
      x: 11,
      y: 17,
    },
  ],
  [
    {
      x: 9,
      y: 16,
    },
    {
      x: 9,
      y: 17,
    },
  ],
  [
    {
      x: 7,
      y: 17,
    },
  ],
  [
    {
      x: 5,
      y: 17,
    },
  ],
  [
    {
      x: 3,
      y: 18,
    },
  ],
]

const defaultMap: IMap = {
  hits: [],
  ships: [
    {
      coords: [
        {
          x: 'b',
          y: '2',
        },
        {
          x: 'b',
          y: '3',
        },
        {
          x: 'b',
          y: '4',
        },
        {
          x: 'b',
          y: '5',
        },
      ],
      destroyed: false,
    },
    {
      coords: [
        {
          x: 'd',
          y: '2',
        },
        {
          x: 'd',
          y: '3',
        },
        {
          x: 'd',
          y: '4',
        },
      ],
      destroyed: false,
    },
    {
      coords: [
        {
          x: 'f',
          y: '2',
        },
        {
          x: 'f',
          y: '3',
        },
        {
          x: 'f',
          y: '4',
        },
      ],
      destroyed: false,
    },
    {
      coords: [
        {
          x: 'h',
          y: '2',
        },
        {
          x: 'h',
          y: '3',
        },
      ],
      destroyed: false,
    },
    {
      coords: [
        {
          x: 'j',
          y: '2',
        },
        {
          x: 'j',
          y: '3',
        },
      ],
      destroyed: false,
    },
    {
      coords: [
        {
          x: 'j',
          y: '5',
        },
        {
          x: 'j',
          y: '6',
        },
      ],
      destroyed: false,
    },
    {
      coords: [
        {
          x: 'h',
          y: '5',
        },
      ],
      destroyed: false,
    },
    {
      coords: [
        {
          x: 'h',
          y: '7',
        },
      ],
      destroyed: false,
    },
    {
      coords: [
        {
          x: 'f',
          y: '6',
        },
      ],
      destroyed: false,
    },
    {
      coords: [
        {
          x: 'd',
          y: '6',
        },
      ],
      destroyed: false,
    },
  ],
}
