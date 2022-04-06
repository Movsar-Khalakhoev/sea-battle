import React from 'react'
import { Layer, Stage } from 'react-konva'
import { cellSideSize } from '../../variables'
import CheckeredArea from '../CheckeredArea/CheckeredArea'
import HorizontalAxis from '../Map/HorizontalAxis'
import VerticalAxis from '../Map/VerticalAxis'
import { MyMapInitializerContext } from '../../context/myMapInitializer.context'
import MapShips from './MapShips'
import ConjecturalShip from './ConjecturalShip'
import PositionedShips from './PositionedShips'

export interface MapPositionedCoord {
  x: number
  y: number
}

export interface MapPositionedShip {
  coords: MapPositionedCoord[]
  id: string
}

const position = { x: 1, y: 1 }

interface MyMapInitializerProps {}

const MyMapInitializer: React.FC<MyMapInitializerProps> = () => {
  const size = React.useMemo(
    () => ({
      height: cellSideSize * 20,
      width: cellSideSize * 13,
    }),
    []
  )

  return (
    <MyMapInitializerContext.Consumer>
      {value => (
        <Stage width={size.width} height={size.height}>
          <MyMapInitializerContext.Provider value={value}>
            <CheckeredArea size={size} />
            <Layer x={(position?.x || 0) * cellSideSize} y={(position?.y || 0) * cellSideSize}>
              <HorizontalAxis />
              <VerticalAxis />
            </Layer>
            <MapShips position={position} />
            <ConjecturalShip position={position} />
            <PositionedShips position={position} />
          </MyMapInitializerContext.Provider>
        </Stage>
      )}
    </MyMapInitializerContext.Consumer>
  )
}

export default MyMapInitializer
