import React from 'react'
import Map from '../Map/Map'
import { Vector2d } from 'konva/cmj/types'
import { StateContext } from '../../context/state.context'
import { defaultCellSideSize } from '../../variables'
import { MapCoord, MapShip } from '../../models/Map'
import { FirebaseService } from '../../utils/FirebaseService'
import { useBattle } from '../../hooks/useBattle'

interface RivalMapProps {
  position?: Vector2d
  cellSideSize?: number
}

const RivalMap: React.FC<RivalMapProps> = ({ position, cellSideSize = defaultCellSideSize }) => {
  const { rivalMap, setRivalMapHits, game } = React.useContext(StateContext)
  const [visibleRivalMapShips, setVisibleRivalMapShips] = React.useState<MapShip[]>([])
  const [battle] = useBattle(game?.id)

  const onHit = async (coord: MapCoord) => {
    if (game) {
      const allShipsCoords = rivalMap.ships.map(ship => ship.coords).flat()
      const hit = !!allShipsCoords.find(c => c.x === coord.x && c.y === coord.y)
      await FirebaseService.hit(
        game.id,
        coord,
        game.player,

        hit ? game.player : game.player === 'player1' ? 'player2' : 'player1'
      )
    }
  }

  React.useEffect(() => {
    const data = battle?.data()
    if (game && data) {
      if (game.player === 'player1') {
        setRivalMapHits(data.player2.hits)
      } else {
        setRivalMapHits(data.player1.hits)
      }
    }
  }, [battle])

  React.useEffect(() => {
    const copiedRivalShips = JSON.parse(JSON.stringify(rivalMap.ships)) as MapShip[]

    const visibleShips: MapShip[] = []
    copiedRivalShips.forEach(ship => {
      const shipVisibility = !!ship.coords.find(coord =>
        rivalMap.hits.find(hit => coord.x === hit.x && coord.y === hit.y)
      )
      if (shipVisibility) {
        const prevCoordsCount = ship.coords.length
        ship.coords = ship.coords.filter(coord =>
          rivalMap.hits.find(hit => coord.x === hit.x && coord.y === hit.y)
        )
        if (prevCoordsCount === ship.coords.length) ship.destroyed = true

        visibleShips.push(ship)
      }
    })
    setVisibleRivalMapShips(visibleShips)
  }, [rivalMap.hits])

  return (
    <Map
      position={position}
      mapState={{ ships: visibleRivalMapShips, hits: rivalMap.hits }}
      cellSideSize={cellSideSize}
      nickname={game?.rivalNickname}
      hit={{
        onHit,
        hits: rivalMap.hits,
        disabled: battle?.data()?.move !== game?.player,
      }}
    />
  )
}

export default RivalMap
