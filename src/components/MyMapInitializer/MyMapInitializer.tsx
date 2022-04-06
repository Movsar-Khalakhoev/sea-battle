import React from 'react'
import styles from './MyMapInitializer.module.sass'
import MapPainter, { initializerMapSize } from './MapPainter'
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
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { setStep, setMyMapShips } = React.useContext(StateContext)
  const { mapShips, positionedShips, setRulesModelOpened, setInitializerCellSideSize } =
    React.useContext(MyMapInitializerContext)

  const onReadyClick = () => {
    setStep('game')
    setMyMapShips(mapShips)
  }

  React.useEffect(() => {
    if (containerRef.current) {
      setInitializerCellSideSize(containerRef.current.clientWidth / initializerMapSize.width)
    }
  }, [])

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.painter}>
        <MapPainter />
      </div>
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
