export interface MapCoord {
  x: string
  y: string
}

export interface MapShip {
  coords: MapCoord[]
  destroyed: boolean
}

export interface Map {
  ships: MapShip[]
  hits: MapCoord[]
}
