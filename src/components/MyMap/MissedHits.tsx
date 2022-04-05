import React from 'react'
import { Group, Star } from 'react-konva'
import { cellSideSize } from '../../variables'
import { horizontalCoords, verticalCoords } from './MyMap'
import { MapState } from '../../models/MapState'

interface MissedHitsProps {
  mapState: MapState
}

const MissedHits: React.FC<MissedHitsProps> = ({ mapState: { ships, hits } }) => {
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
          numPoints={8}
          innerRadius={3}
          outerRadius={10}
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
