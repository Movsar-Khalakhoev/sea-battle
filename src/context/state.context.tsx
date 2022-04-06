import React from 'react'
import { IMap, MapCoord, MapShip } from '../models/Map'
import { v4 as uuidv4 } from 'uuid'

export interface IStateContext {
  myMap: IMap
  rivalMap: IMap
}

export const StateContext = React.createContext<IStateContext>({
  myMap: {
    ships: [],
    hits: [],
  },
  rivalMap: {
    ships: [],
    hits: [],
  },
})

const StateContextProvider: React.FC = ({ children }) => {
  const [myShips, setMyShips] = React.useState<MapShip[]>([
    {
      coords: [
        {
          x: 'b',
          y: '2',
        },
        {
          x: 'c',
          y: '2',
        },
        {
          x: 'd',
          y: '2',
        },
      ],
      destroyed: true,
      id: uuidv4(),
    },
    {
      coords: [
        {
          x: 'g',
          y: '4',
        },
      ],
      destroyed: false,
      id: uuidv4(),
    },
    {
      coords: [
        {
          x: 'f',
          y: '5',
        },
        {
          x: 'f',
          y: '6',
        },
      ],
      destroyed: false,
      id: uuidv4(),
    },
  ])
  const [rivalHits, setRivalHits] = React.useState<MapCoord[]>([
    {
      x: 'b',
      y: '2',
    },
    {
      x: 'b',
      y: '3',
    },
    {
      x: 'b',
      y: '5',
    },
    {
      x: 'b',
      y: '6',
    },
    {
      x: 'b',
      y: '7',
    },
    {
      x: 'f',
      y: '5',
    },
    {
      x: 'f',
      y: '6',
    },
  ])
  const [rivalShips, setRivalShips] = React.useState<MapShip[]>([])
  const [myHits, setMyHits] = React.useState<MapCoord[]>([])

  return (
    <StateContext.Provider
      value={{
        myMap: { ships: myShips, hits: rivalHits },
        rivalMap: { ships: rivalShips, hits: myHits },
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export default StateContextProvider
