import React from 'react'
import { Stage } from 'react-konva'
import { cellSideSize } from '../../variables'
import CheckeredArea from '../CheckeredArea/CheckeredArea'
import { Size } from '../../models/Size'
import { StateContext } from '../../context/state.context'
import AllShips from './AllShips'

interface MyMapInitializerProps {}

const MyMapInitializer: React.FC<MyMapInitializerProps> = () => {
  const [size] = React.useState<Size>({
    height: cellSideSize * 19,
    width: cellSideSize * 19,
  })

  return (
    <StateContext.Consumer>
      {value => (
        <Stage width={size.width} height={size.height}>
          <StateContext.Provider value={value}>
            <CheckeredArea size={size} />
            <AllShips />
          </StateContext.Provider>
        </Stage>
      )}
    </StateContext.Consumer>
  )
}

export default MyMapInitializer
