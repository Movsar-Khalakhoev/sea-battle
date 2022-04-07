import { addDoc, collection, Firestore, updateDoc, doc } from 'firebase/firestore'

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
        nickname,
        hits: [],
      },
      player2: {
        nickname: null,
        hits: [],
      },
    })
  }

  static joinToBattle(gameId: string, nickname: string) {
    return updateDoc(doc(this.firestoreDb, this.collectionName, gameId), {
      player2: {
        nickname,
        hits: [],
      },
    })
  }
}
