import React from 'react'

export interface MapCoord {
  x: string
  y: string
}

export interface IStateContext {
  ships: {
    coords: MapCoord[]
  }[]
  rivalHits: MapCoord[]
}

export const StateContext = React.createContext<IStateContext>({
  ships: [],
  rivalHits: [],
})

const StateContextProvider: React.FC = ({ children }) => {
  const [ships, setShips] = React.useState<IStateContext['ships']>([
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
  const [rivalHits, setRivalHits] = React.useState<IStateContext['rivalHits']>([
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

  return <StateContext.Provider value={{ ships, rivalHits }}>{children}</StateContext.Provider>
}

export default StateContextProvider
