import React from 'react'
import { MapState } from '../models/MapState'

export interface IStateContext {
  myMap: MapState
}

export const StateContext = React.createContext<IStateContext>({
  myMap: {
    ships: [],
    hits: [],
  },
})

const StateContextProvider: React.FC = ({ children }) => {
  const [myShips, setMyShips] = React.useState<IStateContext['myMap']['ships']>([
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
    },
    {
      coords: [
        {
          x: 'g',
          y: '4',
        },
      ],
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
    },
  ])
  const [rivalHits, setRivalHits] = React.useState<IStateContext['myMap']['hits']>([
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

  return (
    <StateContext.Provider value={{ myMap: { ships: myShips, hits: rivalHits } }}>
      {children}
    </StateContext.Provider>
  )
}

export default StateContextProvider
