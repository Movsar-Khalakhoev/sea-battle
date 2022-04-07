import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import App from './App'
import StateContextProvider from './context/state.context'
import MyMapInitializerContextProvider from './context/myMapInitializer.context'
import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { FirebaseService } from './utils/FirebaseService'

export const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDUrwg_ZtFObXBZEx0Q7nmiXs5tRpsTJBc',
  authDomain: 'sea-battle-3cb54.firebaseapp.com',
  projectId: 'sea-battle-3cb54',
  storageBucket: 'sea-battle-3cb54.appspot.com',
  messagingSenderId: '391483818458',
  appId: '1:391483818458:web:c8166093bec5421e0bc0e3',
})

FirebaseService.setFirestoreDb(getFirestore(firebaseApp))

ReactDOM.render(
  <StrictMode>
    <StateContextProvider>
      <MyMapInitializerContextProvider>
        <App />
      </MyMapInitializerContextProvider>
    </StateContextProvider>
  </StrictMode>,
  document.getElementById('root')
)
