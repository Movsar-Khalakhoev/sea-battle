import { MapCoord } from './MapCoord'

export interface MapState {
  ships: {
    coords: MapCoord[]
  }[]
  hits: MapCoord[]
}
