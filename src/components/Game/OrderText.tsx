import React from 'react'
import styles from './Game.module.sass'
import { StateContext } from '../../context/state.context'

interface OrderTextProps {}

const OrderText: React.FC<OrderTextProps> = () => {
  const { game, myMap, rivalMap } = React.useContext(StateContext)

  return (
    <div>
      {game ? (
        game.player === 'player1' && rivalMap.hits.length <= myMap.hits.length ? (
          <p className={styles.orderText}>Твой ход!</p>
        ) : (
          <p className={styles.orderText}>Теперь ходит соперник. Ждём!</p>
        )
      ) : null}
    </div>
  )
}

export default OrderText
