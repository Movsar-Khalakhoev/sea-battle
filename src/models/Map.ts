export interface MapCoord {
  x: string
  y: string
}

export interface MapShip {
  coords: MapCoord[]
  destroyed: boolean
}

export interface IMap {
  ships: MapShip[]
  hits: MapCoord[]
}
