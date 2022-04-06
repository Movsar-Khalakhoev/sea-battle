import React from 'react'
import styles from './Registration.module.sass'
import Button from '../Button/Button'
import { copyToClipboard } from '../../utils/copyToClipboard'
import Input from '../Input/Input'
import { v4 as uuidv4 } from 'uuid'

interface CreateGameFormProps {
  onClose: () => void
}

const CreateGameForm: React.FC<CreateGameFormProps> = ({ onClose }) => {
  const [gameId] = React.useState(uuidv4())
  const [nickname, setNickname] = React.useState('')

  const createGame = () => {}

  return (
    <>
      <div className={styles.createFormGameIdContainer}>
        <p className={styles.createFormGameIdDescription}>Этот код нужно передать сопернику:</p>
        <p className={styles.createFormGameId}>{gameId}</p>
        <Button className={styles.createFormGameIdButton} onClick={() => copyToClipboard(gameId)}>
          Скопировать
        </Button>
      </div>
      <Input
        placeholder='Введи свой никнэйм'
        label='Никнэйм*'
        onChange={event => setNickname(event.target.value)}
        value={nickname}
      />
      <div className={styles.buttons}>
        <Button onClick={createGame} className={styles.buttonsButton} disabled={!nickname}>
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
