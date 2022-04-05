import React from 'react'
import { Circle, Group } from 'react-konva'
import { IMap } from '../../models/Map'
import { cellSideSize } from '../../variables'
import DestroyedCell from './DestroyedCell'
import UndestroyedCell from './UndestroyedCell'
import { horizontalCoords, verticalCoords } from './Map'

interface ShipsProps {
  mapState: IMap
}

const Ships: React.FC<ShipsProps> = ({ mapState: { ships, hits } }) => {
  return (
    <Group>
      {ships.map((ship, index) => (
        <Group x={cellSideSize} y={cellSideSize} key={index} opacity={ship.destroyed ? 0.6 : 1}>
          {ship.coords.map(coord => {
            const hit = hits.find(hit => hit.x === coord.x && hit.y === coord.y)
            return (
              <React.Fragment key={coord.x + coord.y}>
                {ship.destroyed ? (
                  <DestroyedCell coord={coord} />
                ) : (
                  <UndestroyedCell coord={coord} />
                )}
                {hit && !ship.destroyed && (
                  <Circle
                    radius={cellSideSize / 3}
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
