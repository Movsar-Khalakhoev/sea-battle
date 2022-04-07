import { MapCoord, MapShip } from './Map'

export interface FirebaseModel {
  move: 'player1' | 'player2'
  player1: {
    readyToPlay: boolean
    nickname: string
    map: MapShip[]
    hits: MapCoord[]
  }
  player2: {
    readyToPlay: boolean
    nickname: string | null
    map: MapShip[]
    hits: MapCoord[]
  }
}
