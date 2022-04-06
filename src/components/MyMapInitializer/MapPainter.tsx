import React from 'react'
import { Layer, Rect, Stage } from 'react-konva'
import { MyMapInitializerContext } from '../../context/myMapInitializer.context'
import CheckeredArea from '../CheckeredArea/CheckeredArea'
import HorizontalAxis from '../Map/HorizontalAxis'
import VerticalAxis from '../Map/VerticalAxis'
import MapShips from './MapShips'
import ConjecturalShip from './ConjecturalShip'
import PositionedShips from './PositionedShips'
import { horizontalCoords, verticalCoords } from '../../variables'
import { getCssVariable } from '../../utils/cssVariables'

const position = { x: 1, y: 1 }
export const initializerMapSize = {
  height: 20,
  width: 13,
}

interface MapPainterProps {}

const MapPainter: React.FC<MapPainterProps> = () => {
  const { initializerCellSideSize } = React.useContext(MyMapInitializerContext)
  const size = React.useMemo(
    () => ({
      height: initializerMapSize.height * initializerCellSideSize,
      width: initializerMapSize.width * initializerCellSideSize,
    }),
    [initializerMapSize, initializerCellSideSize]
  )

  return (
    <MyMapInitializerContext.Consumer>
      {value => (
        <Stage
          width={initializerMapSize.width * initializerCellSideSize}
          height={initializerMapSize.height * initializerCellSideSize}
        >
          <MyMapInitializerContext.Provider value={value}>
            <CheckeredArea size={size} cellSideSize={initializerCellSideSize} />
            <Layer
              x={(position?.x || 0) * initializerCellSideSize}
              y={(position?.y || 0) * initializerCellSideSize}
            >
              <HorizontalAxis cellSideSize={initializerCellSideSize} />
              <VerticalAxis cellSideSize={initializerCellSideSize} />
              <Rect
                x={initializerCellSideSize}
                y={initializerCellSideSize}
                width={horizontalCoords.length * initializerCellSideSize}
                height={verticalCoords.length * initializerCellSideSize}
                strokeWidth={2}
                stroke={getCssVariable('--blue')}
              />
            </Layer>
            <MapShips position={position} cellSideSize={initializerCellSideSize} />
            <ConjecturalShip position={position} cellSideSize={initializerCellSideSize} />
            <PositionedShips position={position} cellSideSize={initializerCellSideSize} />
          </MyMapInitializerContext.Provider>
        </Stage>
      )}
    </MyMapInitializerContext.Consumer>
  )
}

export default MapPainter
