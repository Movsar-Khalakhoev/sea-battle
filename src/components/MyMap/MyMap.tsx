import React from 'react'
import { Vector2d } from 'konva/cmj/types'
import Map from '../Map/Map'
import { StateContext } from '../../context/state.context'
import { useBattle } from '../../hooks/useBattle'

interface MyMapProps {
  position?: Vector2d
  cellSideSize?: number
}

const MyMap: React.FC<MyMapProps> = ({ position, cellSideSize }) => {
  const { setStep, myMap, setMyMapHits, game } = React.useContext(StateContext)
  const [battle] = useBattle(game?.id)

  React.useEffect(() => {
    const data = battle?.data()
    if (game && data) {
      if (game.player === 'player1') {
        setMyMapHits(data.player1.hits)
      } else {
        setMyMapHits(data.player2.hits)
      }
    }
  }, [battle])

  React.useEffect(() => {
    if (myMap.ships.reduce((acc, ship) => acc && ship.destroyed, true)) {
      setStep('end')
    }
  }, [myMap])

  return (
    <Map
      position={position}
      mapState={myMap}
      cellSideSize={cellSideSize}
      nickname={game?.myNickname}
    />
  )
}

export default MyMap
