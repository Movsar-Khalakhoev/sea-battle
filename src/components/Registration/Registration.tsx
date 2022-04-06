import React from 'react'
import styles from './Registration.module.sass'
import Button from '../Button/Button'
import CreateGameForm from './CreateGameForm'
import LoginForm from './LoginForm'

interface RegistrationProps {}

const Registration: React.FC<RegistrationProps> = () => {
  const [formMode, setFormMode] = React.useState<'create' | 'login' | null>(null)

  return (
    <div className={styles.container}>
      <div className={styles.mainForm}>
        {formMode === null && (
          <>
            <Button className={styles.mainFormButton} onClick={() => setFormMode('create')}>
              Создать игру
            </Button>
            <Button className={styles.mainFormButton} onClick={() => setFormMode('login')}>
              Войти с существующую
            </Button>
          </>
        )}
        {formMode === 'create' && <CreateGameForm onClose={() => setFormMode(null)} />}
        {formMode === 'login' && <LoginForm onClose={() => setFormMode(null)} />}
      </div>
    </div>
  )
}

export default Registration
