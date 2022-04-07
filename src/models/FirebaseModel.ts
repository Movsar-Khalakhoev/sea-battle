export interface FirebaseModel {
  player1: {
    readyToPlay: boolean
    nickname: string
    hits: any
  }
  player2: {
    readyToPlay: boolean
    nickname: string | null
    hits: any
  }
}
