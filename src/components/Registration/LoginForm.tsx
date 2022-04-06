import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import styles from './Registration.module.sass'

interface LoginFormProps {
  onClose: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  const [gameId, setGameId] = React.useState('')
  const [nickname, setNickname] = React.useState('')

  const login = () => {}

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
        <Button onClick={login} className={styles.buttonsButton} disabled={!nickname || !gameId}>
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
