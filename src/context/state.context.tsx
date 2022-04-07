import React from 'react'
import { IMap, MapCoord, MapShip } from '../models/Map'

export type Step = 'register' | 'initializer' | 'game' | 'end'

export type Game = {
  id: string
  player: 'player1' | 'player2'
  myNickname: string
  rivalNickname: string
}

export interface IStateContext {
  game: Game | null
  setGame: React.Dispatch<React.SetStateAction<Game | null>>
  step: Step
  setStep: React.Dispatch<React.SetStateAction<Step>>

  myMap: IMap
  setMyMapShips: React.Dispatch<React.SetStateAction<MapShip[]>>
  setMyMapHits: React.Dispatch<React.SetStateAction<MapCoord[]>>

  rivalMap: IMap
  setRivalMapShips: React.Dispatch<React.SetStateAction<MapShip[]>>
  setRivalMapHits: React.Dispatch<React.SetStateAction<MapCoord[]>>

  reset: () => void
}

export const StateContext = React.createContext<IStateContext>({
  game: null,
  setGame: () => {},

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

  reset: () => {},
})

const StateContextProvider: React.FC = ({ children }) => {
  const [step, setStep] = React.useState<Step>('register')
  const [game, setGame] = React.useState<Game | null>(null)
  const [myShips, setMyShips] = React.useState<MapShip[]>([])
  const [rivalHits, setRivalHits] = React.useState<MapCoord[]>([])
  const [rivalShips, setRivalShips] = React.useState<MapShip[]>([])
  const [myHits, setMyHits] = React.useState<MapCoord[]>([])

  const reset = () => {
    setStep('initializer')
    setMyShips([])
    setRivalShips([])
    setMyHits([])
    setRivalHits([])
  }

  React.useEffect(() => {
    setMyShips(prev =>
      prev.map(ship => {
        const destroyed = !ship.coords.filter(
          coord => !rivalHits.find(hit => coord.x === hit.x && coord.y === hit.y)
        ).length
        return {
          ...ship,
          destroyed,
        }
      })
    )
  }, [rivalHits])

  React.useEffect(() => {
    setRivalShips(prev =>
      prev.map(ship => {
        const destroyed = !ship.coords.filter(
          coord => !myHits.find(hit => coord.x === hit.x && coord.y === hit.y)
        ).length
        return {
          ...ship,
          destroyed,
        }
      })
    )
  }, [myHits])

  return (
    <StateContext.Provider
      value={{
        game,
        setGame,

        step,
        setStep,

        myMap: { ships: myShips, hits: rivalHits },
        setMyMapShips: setMyShips,
        setMyMapHits: setRivalHits,

        rivalMap: { ships: rivalShips, hits: myHits },
        setRivalMapShips: setRivalShips,
        setRivalMapHits: setMyHits,

        reset,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export default StateContextProvider
