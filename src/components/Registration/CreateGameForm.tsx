import React from 'react'
import styles from './Registration.module.sass'
import Button from '../Button/Button'
import { copyToClipboard } from '../../utils/copyToClipboard'
import Input from '../Input/Input'
import { FirebaseService } from '../../utils/FirebaseService'
import { StateContext } from '../../context/state.context'
import { useBattle } from '../../hooks/useBattle'
import { successNotification } from '../../utils/notifications'

interface CreateGameFormProps {
  onClose: () => void
}

const CreateGameForm: React.FC<CreateGameFormProps> = ({ onClose }) => {
  const { setGame, setStep } = React.useContext(StateContext)
  const [gameId, setGameId] = React.useState('')
  const [nickname, setNickname] = React.useState('')
  const [createLoading, setCreateLoading] = React.useState(false)
  const [battle] = useBattle(gameId)

  const createGame = async () => {
    setCreateLoading(true)
    FirebaseService.createBattle(nickname)
      .then(value => {
        setGameId(value.id)
        successNotification('Битва создана успешно')
      })
      .catch(console.log)
      .finally(() => setCreateLoading(false))
  }

  React.useEffect(() => {
    const data = battle?.data()
    if (data && data.player1.nickname && data.player2.nickname) {
      setGame({
        id: gameId,
        player: 'player1',
        myNickname: data.player1.nickname,
        rivalNickname: data.player2.nickname,
      })
      setStep('initializer')
    }
  }, [battle])

  return (
    <>
      <div className={styles.createFormGameIdContainer}>
        <p className={styles.createFormGameIdDescription}>Этот код нужно передать сопернику:</p>
        <p className={styles.createFormGameId}>{gameId}</p>
        {!gameId && (
          <p className={styles.createFormGameId}>Создайте битву, затем здесь появится код</p>
        )}
        <Button
          className={styles.createFormGameIdButton}
          onClick={() => copyToClipboard(gameId)}
          disabled={!gameId}
        >
          Скопировать
        </Button>
      </div>
      <Input
        placeholder='Введи свой никнэйм'
        label='Никнэйм*'
        onChange={event => setNickname(event.target.value)}
        value={nickname}
        disabled={!!battle?.data()}
      />
      <div className={styles.buttons}>
        <Button
          onClick={createGame}
          className={styles.buttonsButton}
          disabled={!nickname || !!battle?.data()}
          loading={createLoading || (battle?.data() && !battle?.data()?.player2.nickname)}
          loadingLabel={
            battle?.data() && !battle?.data()?.player2.nickname
              ? 'Ожидание подключения игрока'
              : 'Загрузка'
          }
        >
          Создать
        </Button>
        <Button onClick={onClose} className={styles.buttonsButton}>
          Назад
        </Button>
      </div>
    </>
  )
}

export default CreateGameForm
