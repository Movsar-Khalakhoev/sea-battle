import React from 'react'
import { MapShip } from '../../models/Map'
import { Group } from 'react-konva'
import UndestroyedCell from '../Map/UndestroyedCell'

interface ShipProps {
  ship: MapShip
}

const Ship: React.FC<ShipProps> = ({ ship }) => {
  return (
    <Group>
      {ship.coords.map(coord => (
        <UndestroyedCell coord={coord} />
      ))}
    </Group>
  )
}

export default Ship
