import React from 'react'
import styles from './End.module.sass'
import { StateContext } from '../../context/state.context'
import Button from '../Button/Button'
import { FirebaseService } from '../../utils/FirebaseService'
import { MyMapInitializerContext } from '../../context/myMapInitializer.context'

interface EndProps {}

const End: React.FC<EndProps> = () => {
  const { myMap, rivalMap, reset, game } = React.useContext(StateContext)
  const { resetInitializer } = React.useContext(MyMapInitializerContext)

  const restart = async () => {
    if (game) {
      reset()
      resetInitializer()
      await FirebaseService.reset(game.id)
    }
  }

  return (
    <div className={styles.container}>
      {!!myMap.ships.length && myMap.ships.reduce((acc, ship) => ship.destroyed && acc, true) && (
        <p className={styles.winLabel}>Вы проиграли(((</p>
      )}
      {!!rivalMap.ships.length &&
        rivalMap.ships.reduce((acc, ship) => ship.destroyed && acc, true) && (
          <p className={styles.winLabel}>Вы выиграли!</p>
        )}
      <Button onClick={restart} className={styles.restartButton}>
        Играть снова
      </Button>
    </div>
  )
}

export default End
