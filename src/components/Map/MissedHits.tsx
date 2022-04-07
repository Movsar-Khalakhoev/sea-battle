import React from 'react'
import { Group, Star } from 'react-konva'
import { defaultCellSideSize, horizontalCoords, verticalCoords } from '../../variables'
import { IMap } from '../../models/Map'

interface MissedHitsProps {
  mapState: IMap
  cellSideSize?: number
}

const MissedHits: React.FC<MissedHitsProps> = ({
  mapState: { ships, hits },
  cellSideSize = defaultCellSideSize,
}) => {
  const missedHits = React.useMemo(() => {
    return hits.filter(hit => {
      const shipsCoords = ships.map(ship => ship.coords).flat()

      return !shipsCoords.find(coord => coord.x === hit.x && coord.y === hit.y)
    })
  }, [ships, hits])

  return (
    <Group x={cellSideSize} y={cellSideSize}>
      {missedHits.map(hit => (
        <Star
          key={hit.x + hit.y}
          numPoints={Math.floor(cellSideSize / 4)}
          innerRadius={cellSideSize / 9}
          outerRadius={cellSideSize / 3}
          strokeWidth={1}
          stroke='red'
          x={horizontalCoords.findIndex(c => c === hit.x) * cellSideSize + cellSideSize / 2}
          y={verticalCoords.findIndex(c => c === hit.y) * cellSideSize + cellSideSize / 2}
        />
      ))}
    </Group>
  )
}

export default MissedHits
