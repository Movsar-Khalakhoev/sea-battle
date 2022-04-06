import React from 'react'
import { Group, Star } from 'react-konva'
import { defaultCellSideSize, horizontalCoords, verticalCoords } from '../../variables'
import { IMap } from '../../models/Map'

interface MissedHitsProps {
  mapState: IMap
}

const MissedHits: React.FC<MissedHitsProps> = ({ mapState: { ships, hits } }) => {
  const missedHits = React.useMemo(() => {
    return hits.filter(hit => {
      const shipsCoords = ships.map(ship => ship.coords).flat()

      return !shipsCoords.find(coord => coord.x === hit.x && coord.y === hit.y)
    })
  }, [ships, hits])

  return (
    <Group x={defaultCellSideSize} y={defaultCellSideSize}>
      {missedHits.map(hit => (
        <Star
          key={hit.x + hit.y}
          numPoints={Math.floor(defaultCellSideSize / 4)}
          innerRadius={defaultCellSideSize / 9}
          outerRadius={defaultCellSideSize / 3}
          strokeWidth={1}
          stroke='red'
          x={
            horizontalCoords.findIndex(c => c === hit.x) * defaultCellSideSize +
            defaultCellSideSize / 2
          }
          y={
            verticalCoords.findIndex(c => c === hit.y) * defaultCellSideSize +
            defaultCellSideSize / 2
          }
        />
      ))}
    </Group>
  )
}

export default MissedHits
