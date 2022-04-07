import React from 'react'
import styles from './Game.module.sass'
import { StateContext } from '../../context/state.context'
import { useBattle } from '../../hooks/useBattle'

interface OrderTextProps {}

const OrderText: React.FC<OrderTextProps> = () => {
  const { game } = React.useContext(StateContext)
  const [battle] = useBattle(game?.id)

  return (
    <div>
      {game && battle?.data() ? (
        battle?.data()?.move === game.player ? (
          <p className={styles.orderText}>Твой ход!</p>
        ) : (
          <p className={styles.orderText}>Теперь ходит соперник. Ждём!</p>
        )
      ) : null}
    </div>
  )
}

export default OrderText
