import { addDoc, collection, Firestore, updateDoc, arrayUnion, doc } from 'firebase/firestore'
import { FirebaseModel } from '../models/FirebaseModel'
import { MapCoord, MapShip } from '../models/Map'

export class FirebaseService {
  static readonly collectionName = 'battles'
  private static firestoreDb: Firestore

  static setFirestoreDb(firestoreDb: Firestore) {
    this.firestoreDb = firestoreDb
  }

  static getFirestoreDb() {
    return this.firestoreDb
  }

  static createBattle(nickname: string) {
    return addDoc(collection(this.firestoreDb, this.collectionName), {
      move: 'player1',
      player1: {
        readyToPlay: false,
        nickname,
        map: [],
        hits: [],
      },
      player2: {
        readyToPlay: false,
        nickname: null,
        map: [],
        hits: [],
      },
    } as FirebaseModel)
  }

  static joinToBattle(gameId: string, nickname: string) {
    return updateDoc(doc(this.firestoreDb, this.collectionName, gameId), {
      'player2.nickname': nickname,
    } as Partial<FirebaseModel>)
  }

  static readyToPlay(gameId: string, whoAmI: 'player1' | 'player2', map: MapShip[]) {
    const document = doc(this.firestoreDb, this.collectionName, gameId)
    return updateDoc(document, {
      [`${whoAmI}.map`]: map,
      [`${whoAmI}.readyToPlay`]: true,
    } as Partial<FirebaseModel>)
  }

  static hit(gameId: string, coord: MapCoord, whoAmI: 'player1' | 'player2') {
    return updateDoc(doc(this.firestoreDb, this.collectionName, gameId), {
      move: whoAmI === 'player1' ? 'player2' : 'player1',
      [`${whoAmI === 'player1' ? 'player2' : 'player1'}.hits`]: arrayUnion(coord),
    })
  }
}
