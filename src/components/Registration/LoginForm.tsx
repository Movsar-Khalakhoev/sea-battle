import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import styles from './Registration.module.sass'
import { FirebaseService } from '../../utils/FirebaseService'
import { Store } from 'react-notifications-component'
import { useDocument } from 'react-firebase-hooks/firestore'
import { FirebaseModel } from '../../models/FirebaseModel'
import { doc, DocumentReference } from 'firebase/firestore'
import { StateContext } from '../../context/state.context'

interface LoginFormProps {
  onClose: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  const { setGame, setStep } = React.useContext(StateContext)
  const [gameId, setGameId] = React.useState('')
  const [nickname, setNickname] = React.useState('')
  const [loginLoading, setLoginLoading] = React.useState(false)
  const [battle] = useDocument<FirebaseModel>(
    gameId
      ? (doc(
          FirebaseService.getFirestoreDb(),
          FirebaseService.collectionName,
          gameId
        ) as DocumentReference<FirebaseModel>)
      : undefined
  )

  React.useEffect(() => {
    if (nickname === battle?.data()?.player1.nickname) {
      Store.addNotification({
        type: 'warning',
        message: 'Ники не могут быть похожи. Возьмите другой ник',
        container: 'top-right',
      })
    }
  }, [nickname])

  React.useEffect(() => {
    const data = battle?.data()
    if (data && data.player1.nickname && data.player2.nickname) {
      setGame({
        id: gameId,
        player: 'player2',
        myNickname: data.player2.nickname,
        rivalNickname: data.player1.nickname,
      })
      setStep('initializer')
    }
  }, [battle])

  const login = () => {
    setLoginLoading(true)
    FirebaseService.joinToBattle(gameId, nickname)
      .then(() => console.log('joined to game'))
      .catch(() =>
        Store.addNotification({
          type: 'danger',
          message: 'Что-то пошло не так',
          container: 'top-right',
          dismiss: {
            duration: 3000,
          },
        })
      )
      .finally(() => setLoginLoading(false))
  }

  return (
    <>
      <Input
        label='Вставь сюда код игры'
        placeholder='Код игры'
        onChange={event => setGameId(event.target.value)}
        value={gameId}
      />
      <Input
        placeholder='Введи свой никнэйм'
        label='Никнэйм*'
        onChange={event => setNickname(event.target.value)}
        value={nickname}
      />
      <div className={styles.buttons}>
        <Button
          onClick={login}
          className={styles.buttonsButton}
          disabled={!nickname || !gameId || nickname === battle?.data()?.player1.nickname}
          loading={loginLoading}
        >
          Войти
        </Button>
        <Button onClick={onClose} className={styles.buttonsButton}>
          Назад
        </Button>
      </div>
    </>
  )
}

export default LoginForm
