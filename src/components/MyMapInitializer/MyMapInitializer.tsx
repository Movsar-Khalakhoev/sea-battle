import React from 'react'
import styles from './MyMapInitializer.module.sass'
import MapPainter from './MapPainter'
import Button from '../Button/Button'
import { MyMapInitializerContext } from '../../context/myMapInitializer.context'
import clsx from '../../utils/clsx'

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
  const { positionedShips } = React.useContext(MyMapInitializerContext)
  return (
    <div className={styles.container}>
      <MapPainter />
      <div className={styles.actions}>
        <Button
          className={clsx(styles.actionsAction, styles.actionsReady)}
          disabled={!!positionedShips.length}
        >
          Готов!
        </Button>
        <Button className={clsx(styles.actionsAction, styles.actionsInsctruction)}>?</Button>
      </div>
    </div>
  )
}

export default MyMapInitializer
