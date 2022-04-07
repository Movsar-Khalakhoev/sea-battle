import React from 'react'
import { Vector2d } from 'konva/cmj/types'
import Map from '../Map/Map'
import { StateContext } from '../../context/state.context'

interface MyMapProps {
  position?: Vector2d
  cellSideSize?: number
}

const MyMap: React.FC<MyMapProps> = ({ position, cellSideSize }) => {
  const { myMap } = React.useContext(StateContext)

  return <Map position={position} mapState={myMap} cellSideSize={cellSideSize} />
}

export default MyMap
