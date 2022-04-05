import React from 'react'
import { StateContext } from '../../context/state.context'
import { Group, Star } from 'react-konva'
import { cellSideSize } from '../../variables'
import { horizontalCoords, verticalCoords } from './MyMap'

interface MissedHitsProps {}

const MissedHits: React.FC<MissedHitsProps> = () => {
  const { ships, rivalHits } = React.useContext(StateContext)
  const missedRivalHits = React.useMemo(() => {
    return rivalHits.filter(hit => {
      const shipsCoords = ships.map(ship => ship.coords).flat()

      return !shipsCoords.find(coord => coord.x === hit.x && coord.y === hit.y)
    })
  }, [ships, rivalHits])

  return (
    <Group x={cellSideSize} y={cellSideSize}>
      {missedRivalHits.map(hit => (
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
