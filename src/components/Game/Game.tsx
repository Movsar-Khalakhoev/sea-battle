import React from 'react'
import styles from './Game.module.sass'
import GamePainter from './GamePainter'
import { StateContext } from '../../context/state.context'

interface GameProps {}

const Game: React.FC<GameProps> = () => {
  const { game } = React.useContext(StateContext)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = React.useState(0)

  React.useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth)
    }
  }, [])

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.containerNicknames}>
        <p className={styles.containerNickname}>Ты - {game?.myNickname}</p>
        <p className={styles.containerNickname}>Соперник - {game?.rivalNickname}</p>
      </div>
      <div className={styles.containerGameContainer}>
        <GamePainter containerWidth={containerWidth} />
      </div>
    </div>
  )
}

export default Game
