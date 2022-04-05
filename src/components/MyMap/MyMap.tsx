import React from 'react'
import { Vector2d } from 'konva/cmj/types'
import Map from '../Map/Map'
import { StateContext } from '../../context/state.context'

export const horizontalCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
export const verticalCoords = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

interface MyMapProps {
  position?: Vector2d
}

const MyMap: React.FC<MyMapProps> = ({ position }) => {
  const { myMap } = React.useContext(StateContext)

  return <Map position={position} mapState={myMap} />
}

export default MyMap
