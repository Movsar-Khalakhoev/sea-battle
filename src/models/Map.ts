export interface MapCoord {
  x: string
  y: string
}

export interface MapShip {
  coords: MapCoord[]
  destroyed: boolean
  id: string
}

export interface IMap {
  ships: MapShip[]
  hits: MapCoord[]
}
