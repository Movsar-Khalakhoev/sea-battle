import React from 'react'
import styles from './Registration.module.sass'
import Button from '../Button/Button'
import { copyToClipboard } from '../../utils/copyToClipboard'
import Input from '../Input/Input'
import { FirebaseService } from '../../utils/FirebaseService'
import { Store } from 'react-notifications-component'
import { useDocument } from 'react-firebase-hooks/firestore'
import { doc } from 'firebase/firestore'
import { FirebaseModel } from '../../models/FirebaseModel'
import { DocumentReference } from 'firebase/firestore'

interface CreateGameFormProps {
  onClose: () => void
}

const CreateGameForm: React.FC<CreateGameFormProps> = ({ onClose }) => {
  const [gameId, setGameId] = React.useState('')
  const [nickname, setNickname] = React.useState('')
  const [createLoading, setCreateLoading] = React.useState(false)
  const [battle] = useDocument<FirebaseModel>(
    gameId
      ? (doc(
          FirebaseService.getFirestoreDb(),
          FirebaseService.collectionName,
          gameId
        ) as DocumentReference<FirebaseModel>)
      : undefined
  )

  const createGame = async () => {
    setCreateLoading(true)
    FirebaseService.createBattle(nickname)
      .then(value => {
        setGameId(value.id)
        Store.addNotification({
          type: 'success',
          message: 'Битва создана успешно',
          container: 'top-right',
          dismiss: {
            duration: 3000,
          },
        })
      })
      .catch(console.log)
      .finally(() => setCreateLoading(false))
  }

  console.log(battle?.data())
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
