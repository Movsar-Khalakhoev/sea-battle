import { useDocument } from 'react-firebase-hooks/firestore'
import { FirebaseModel } from '../models/FirebaseModel'
import { doc, DocumentReference } from 'firebase/firestore'
import { FirebaseService } from '../utils/FirebaseService'

export function useBattle(gameId?: string | undefined) {
  return useDocument<FirebaseModel>(
    gameId
      ? (doc(
          FirebaseService.getFirestoreDb(),
          FirebaseService.collectionName,
          gameId
        ) as DocumentReference<FirebaseModel>)
      : undefined
  )
}
