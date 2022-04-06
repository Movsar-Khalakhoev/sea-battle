import React from 'react'
import styles from './MyMapInitializer.module.sass'
import MapPainter from './MapPainter'
import Button from '../Button/Button'
import { MyMapInitializerContext } from '../../context/myMapInitializer.context'
import clsx from '../../utils/clsx'
import RulesModal from './RulesModal/RulesModal'
import { StateContext } from '../../context/state.context'

export interface MapPositionedCoord {
  x: number
  y: number
}

export interface MapPositionedShip {
  coords: MapPositionedCoord[]
  id: string
}

interface MyMapInitializerProps {}

const MyMapInitializer: React.FC<MyMapInitializerProps> = () => {
  const { setStep, setMyMapShips } = React.useContext(StateContext)
  const { mapShips, positionedShips, setRulesModelOpened } =
    React.useContext(MyMapInitializerContext)

  const onReadyClick = () => {
    setStep('game')
    setMyMapShips(mapShips)
  }

  return (
    <div className={styles.container}>
      <MapPainter />
      <div className={styles.actions}>
        <Button
          className={clsx(styles.actionsAction, styles.actionsReady)}
          disabled={!!positionedShips.length}
          onClick={onReadyClick}
        >
          Готов!
        </Button>
        <Button
          className={clsx(styles.actionsAction, styles.actionsInsctruction)}
          onClick={() => setRulesModelOpened(true)}
        >
          ?
        </Button>
        <RulesModal />
      </div>
    </div>
  )
}

export default MyMapInitializer
