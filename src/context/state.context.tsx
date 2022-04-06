import React from 'react'
import { IMap, MapCoord, MapShip } from '../models/Map'

export type Step = 'register' | 'initializer' | 'game'

export interface IStateContext {
  step: Step
  setStep: React.Dispatch<React.SetStateAction<Step>>

  myMap: IMap
  setMyMapShips: React.Dispatch<React.SetStateAction<MapShip[]>>
  setMyMapHits: React.Dispatch<React.SetStateAction<MapCoord[]>>

  rivalMap: IMap
  setRivalMapShips: React.Dispatch<React.SetStateAction<MapShip[]>>
  setRivalMapHits: React.Dispatch<React.SetStateAction<MapCoord[]>>
}

export const StateContext = React.createContext<IStateContext>({
  step: 'register',
  setStep: () => {},

  myMap: {
    ships: [],
    hits: [],
  },
  setMyMapShips: () => {},
  setMyMapHits: () => {},

  rivalMap: {
    ships: [],
    hits: [],
  },
  setRivalMapShips: () => {},
  setRivalMapHits: () => {},
})

const StateContextProvider: React.FC = ({ children }) => {
  const [step, setStep] = React.useState<Step>('initializer')
  const [myShips, setMyShips] = React.useState<MapShip[]>([])
  const [rivalHits, setRivalHits] = React.useState<MapCoord[]>([])
  const [rivalShips, setRivalShips] = React.useState<MapShip[]>([])
  const [myHits, setMyHits] = React.useState<MapCoord[]>([])

  return (
    <StateContext.Provider
      value={{
        step,
        setStep,

        myMap: { ships: myShips, hits: rivalHits },
        setMyMapShips: setMyShips,
        setMyMapHits: setRivalHits,

        rivalMap: { ships: rivalShips, hits: myHits },
        setRivalMapShips: setRivalShips,
        setRivalMapHits: setMyHits,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export default StateContextProvider
