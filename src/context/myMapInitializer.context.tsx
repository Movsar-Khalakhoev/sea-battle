import React from 'react'
import { MapShip } from '../models/Map'
import { v4 as uuidv4 } from 'uuid'
import { defaultCellSideSize } from '../variables'

export const _positionedShips: MapPositionedShip[] = [
  {
    coords: [
      {
        x: 2,
        y: 13,
      },
      {
        x: 2,
        y: 14,
      },
      {
        x: 2,
        y: 15,
      },
      {
        x: 2,
        y: 16,
      },
    ],
    id: uuidv4(),
  },
  {
    coords: [
      {
        x: 4,
        y: 13,
      },
      {
        x: 4,
        y: 14,
      },
      {
        x: 4,
        y: 15,
      },
    ],
    id: uuidv4(),
  },
  {
    coords: [
      {
        x: 6,
        y: 13,
      },
      {
        x: 6,
        y: 14,
      },
      {
        x: 6,
        y: 15,
      },
    ],
    id: uuidv4(),
  },
  {
    coords: [
      {
        x: 8,
        y: 13,
      },
      {
        x: 8,
        y: 14,
      },
    ],
    id: uuidv4(),
  },
  {
    coords: [
      {
        x: 10,
        y: 13,
      },
      {
        x: 10,
        y: 14,
      },
    ],
    id: uuidv4(),
  },
  {
    coords: [
      {
        x: 10,
        y: 16,
      },
      {
        x: 10,
        y: 17,
      },
    ],
    id: uuidv4(),
  },
  {
    coords: [
      {
        x: 8,
        y: 16,
      },
    ],
    id: uuidv4(),
  },
  {
    coords: [
      {
        x: 6,
        y: 17,
      },
    ],
    id: uuidv4(),
  },
  {
    coords: [
      {
        x: 4,
        y: 17,
      },
    ],
    id: uuidv4(),
  },
  {
    coords: [
      {
        x: 2,
        y: 18,
      },
    ],
    id: uuidv4(),
  },
]

export interface MapPositionedCoord {
  x: number
  y: number
}

export interface MapPositionedShip {
  coords: MapPositionedCoord[]
  id: string
}

export type ConjecturalShip = {
  ship: MapPositionedShip
  wrongPosition: boolean
} | null

export interface IMyMapInitializerContext {
  mapShips: MapShip[]
  setMapShips: React.Dispatch<React.SetStateAction<MapShip[]>>

  positionedShips: MapPositionedShip[]
  setPositionedShips: React.Dispatch<React.SetStateAction<MapPositionedShip[]>>

  conjecturalShip: ConjecturalShip
  setConjecturalShip: React.Dispatch<React.SetStateAction<ConjecturalShip>>

  rulesModalOpened: boolean
  setRulesModelOpened: React.Dispatch<React.SetStateAction<boolean>>

  initializerCellSideSize: number
  setInitializerCellSideSize: React.Dispatch<React.SetStateAction<number>>
}

export const MyMapInitializerContext = React.createContext<IMyMapInitializerContext>({
  mapShips: [],
  setMapShips: () => {},

  positionedShips: _positionedShips,
  setPositionedShips: () => {},

  conjecturalShip: null,
  setConjecturalShip: () => {},

  rulesModalOpened: false,
  setRulesModelOpened: () => {},

  initializerCellSideSize: defaultCellSideSize,
  setInitializerCellSideSize: () => {},
})

interface MyMapInitializerContextProps {}

const MyMapInitializerContextProvider: React.FC<MyMapInitializerContextProps> = ({ children }) => {
  const [mapShips, setMapShips] = React.useState<MapShip[]>([])
  const [positionedShips, setPositionedShips] = React.useState(_positionedShips)
  const [conjecturalShip, setConjecturalShip] = React.useState<{
    ship: MapPositionedShip
    wrongPosition: boolean
  } | null>(null)
  const [rulesModalOpened, setRulesModelOpened] = React.useState(false)
  const [initializerCellSideSize, setInitializerCellSideSize] = React.useState(defaultCellSideSize)

  return (
    <MyMapInitializerContext.Provider
      value={{
        mapShips,
        setMapShips,
        positionedShips,
        setPositionedShips,
        conjecturalShip,
        setConjecturalShip,
        rulesModalOpened,
        setRulesModelOpened,
        initializerCellSideSize,
        setInitializerCellSideSize,
      }}
    >
      {children}
    </MyMapInitializerContext.Provider>
  )
}

export default MyMapInitializerContextProvider
