import React from 'react'
import Map from '../Map/Map'
import { Vector2d } from 'konva/cmj/types'
import { StateContext } from '../../context/state.context'

interface RivalMapProps {
  position?: Vector2d
}

const RivalMap: React.FC<RivalMapProps> = ({ position }) => {
  const { rivalMap } = React.useContext(StateContext)

  return <Map position={position} mapState={rivalMap} />
}

export default RivalMap
