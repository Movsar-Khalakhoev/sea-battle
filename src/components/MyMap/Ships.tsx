import React from 'react'
import { Circle, Group, Rect } from 'react-konva'
import { cellSideSize } from '../../variables'
import { horizontalCoords, verticalCoords } from './MyMap'
import { StateContext } from '../../context/state.context'

const hitShapeSideSize = 20

interface ShipsProps {}

const Ships: React.FC<ShipsProps> = () => {
  const { ships, rivalHits } = React.useContext(StateContext)

  return (
    <Group>
      {ships.map((ship, index) => (
        <Group x={cellSideSize} y={cellSideSize} key={index}>
          {ship.coords.map(coord => {
            const hit = rivalHits.find(hit => hit.x === coord.x && hit.y === coord.y)
            return (
              <React.Fragment key={coord.x + coord.y}>
                <Rect
                  key={coord.x + coord.y}
                  x={horizontalCoords.findIndex(c => c === coord.x) * cellSideSize}
                  y={verticalCoords.findIndex(c => c === coord.y) * cellSideSize}
                  width={cellSideSize}
                  height={cellSideSize}
                  strokeWidth={1}
                  stroke='red'
                />
                {hit && (
                  <Circle
                    radius={hitShapeSideSize / 2}
                    stroke='red'
                    strokeWidth={1}
                    x={
                      horizontalCoords.findIndex(c => c === coord.x) * cellSideSize +
                      cellSideSize / 2
                    }
                    y={
                      verticalCoords.findIndex(c => c === coord.y) * cellSideSize + cellSideSize / 2
                    }
                  />
                )}
              </React.Fragment>
            )
          })}
        </Group>
      ))}
    </Group>
  )
}

export default Ships
