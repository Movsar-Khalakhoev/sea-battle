import { MapCoord } from './Map'

export interface FirebaseModel {
  player1: {
    readyToPlay: boolean
    nickname: string
    hits: MapCoord[]
  }
  player2: {
    readyToPlay: boolean
    nickname: string | null
    hits: MapCoord[]
  }
}
