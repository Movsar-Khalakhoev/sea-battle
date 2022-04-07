import React from 'react'
import styles from './MyMapInitializer.module.sass'
import MapPainter, { initializerMapSize } from './MapPainter'
import Button from '../Button/Button'
import { MyMapInitializerContext } from '../../context/myMapInitializer.context'
import clsx from '../../utils/clsx'
import RulesModal from './RulesModal/RulesModal'
import { StateContext } from '../../context/state.context'
import { FirebaseService } from '../../utils/FirebaseService'
import { useDocument } from 'react-firebase-hooks/firestore'
import { FirebaseModel } from '../../models/FirebaseModel'
import { doc, DocumentReference } from 'firebase/firestore'
import { Store } from 'react-notifications-component'

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
  const { setStep, setMyMapShips, setRivalMapShips, game } = React.useContext(StateContext)
  const { mapShips, positionedShips, setRulesModelOpened, setInitializerCellSideSize } =
    React.useContext(MyMapInitializerContext)
  const [readyLoading, setReadyLoading] = React.useState(false)
  const [battle] = useDocument<FirebaseModel>(
    game?.id
      ? (doc(
          FirebaseService.getFirestoreDb(),
          FirebaseService.collectionName,
          game.id
        ) as DocumentReference<FirebaseModel>)
      : undefined
  )

  const onReadyClick = () => {
    if (game) {
      setReadyLoading(true)
      FirebaseService.readyToPlay(game.id, game.player, mapShips).finally(() =>
        setReadyLoading(false)
      )
    }
  }

  React.useEffect(() => {
    if (containerRef.current) {
      setInitializerCellSideSize(containerRef.current.clientWidth / initializerMapSize.width)
    }
  }, [])

  React.useEffect(() => {
    const data = battle?.data()
    if (
      data &&
      ((game?.player === 'player1' && data.player2.readyToPlay && !data.player1.readyToPlay) ||
        (game?.player === 'player2' && data.player1.readyToPlay && !data.player2.readyToPlay))
    ) {
      Store.addNotification({
        type: 'success',
        message: `${
          game?.player === 'player1' ? data.player2.nickname : data.player1.nickname
        } готов к бою!`,
        container: 'top-right',
        dismiss: {
          duration: 3000,
        },
      })
    }
  }, [battle])

  React.useEffect(() => {
    const data = battle?.data()
    if (game && data && data.player1.readyToPlay && data.player2.readyToPlay) {
      setStep('game')
      setMyMapShips(mapShips)
      setRivalMapShips(data[game.player === 'player1' ? 'player2' : 'player1'].map)
      Store.addNotification({
        type: 'success',
        message: 'Игра началась!',
        container: 'top-right',
        dismiss: {
          duration: 3000,
        },
      })
    }
  }, [battle])

  return (
    <div className={styles.container} ref={containerRef}>
      <h2 className={styles.header}>Расставь свои корабли!</h2>
      <div className={styles.painter}>
        <MapPainter />
      </div>
      <div className={styles.actions}>
        <Button
          className={clsx(styles.actionsAction, styles.actionsReady)}
          disabled={!!positionedShips.length}
          onClick={onReadyClick}
          loading={
            readyLoading ||
            (game?.player === 'player1'
              ? battle?.data()?.player1.readyToPlay && !battle?.data()?.player2.readyToPlay
              : battle?.data()?.player2.readyToPlay && !battle?.data()?.player1.readyToPlay)
          }
          loadingLabel={
            (
              game?.player === 'player1'
                ? battle?.data()?.player1.readyToPlay && !battle?.data()?.player2.readyToPlay
                : battle?.data()?.player2.readyToPlay && !battle?.data()?.player1.readyToPlay
            )
              ? 'Ожидание второго игрока'
              : undefined
          }
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
