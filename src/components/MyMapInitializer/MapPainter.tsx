import React from 'react'
import { Layer, Stage } from 'react-konva'
import { MyMapInitializerContext } from '../../context/myMapInitializer.context'
import CheckeredArea from '../CheckeredArea/CheckeredArea'
import { cellSideSize } from '../../variables'
import HorizontalAxis from '../Map/HorizontalAxis'
import VerticalAxis from '../Map/VerticalAxis'
import MapShips from './MapShips'
import ConjecturalShip from './ConjecturalShip'
import PositionedShips from './PositionedShips'

const position = { x: 1, y: 1 }

interface MapPainterProps {}

const MapPainter: React.FC<MapPainterProps> = () => {
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

export default MapPainter
