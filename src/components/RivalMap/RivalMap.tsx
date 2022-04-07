import React from 'react'
import Map from '../Map/Map'
import { Vector2d } from 'konva/cmj/types'
import { StateContext } from '../../context/state.context'
import { defaultCellSideSize } from '../../variables'

interface RivalMapProps {
  position?: Vector2d
  cellSideSize?: number
}

const RivalMap: React.FC<RivalMapProps> = ({ position, cellSideSize = defaultCellSideSize }) => {
  const { rivalMap, setRivalMapHits, game } = React.useContext(StateContext)

  return (
    <Map
      position={position}
      mapState={rivalMap}
      cellSideSize={cellSideSize}
      nickname={game?.rivalNickname}
      hit={{
        onHit: coord => setRivalMapHits(prev => [...prev, coord]),
        hits: rivalMap.hits,
      }}
    />
  )
}

export default RivalMap
