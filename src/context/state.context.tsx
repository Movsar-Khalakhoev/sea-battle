import React from 'react'

export interface IStateContext {
  ships: {
    coords: {
      x: string
      y: string
    }[]
  }[]
}

export const StateContext = React.createContext<IStateContext>({
  ships: [],
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

  return <StateContext.Provider value={{ ships }}>{children}</StateContext.Provider>
}

export default StateContextProvider
