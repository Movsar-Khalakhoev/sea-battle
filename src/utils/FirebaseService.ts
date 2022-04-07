import { addDoc, collection, Firestore, updateDoc, doc } from 'firebase/firestore'
import { FirebaseModel } from '../models/FirebaseModel'

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
      player1: {
        readyToPlay: false,
        nickname,
        hits: [],
      },
      player2: {
        readyToPlay: false,
        nickname: null,
        hits: [],
      },
    } as FirebaseModel)
  }

  static joinToBattle(gameId: string, nickname: string) {
    return updateDoc(doc(this.firestoreDb, this.collectionName, gameId), {
      player2: {
        readyToPlay: false,
        nickname,
        hits: [],
      },
    } as Partial<FirebaseModel>)
  }

  static readyToPlay(gameId: string, player: 'player1' | 'player2') {
    const document = doc(this.firestoreDb, this.collectionName, gameId)
    return updateDoc(document, {
      [`${player}.readyToPlay`]: true,
    } as Partial<FirebaseModel>)
  }
}
