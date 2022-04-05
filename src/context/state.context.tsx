import React from 'react'
import { Map } from '../models/Map'

export interface IStateContext {
  myMap: Map
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
      destroyed: false,
    },
    {
      coords: [
        {
          x: 'g',
          y: '4',
        },
      ],
      destroyed: false,
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
