import React from 'react'
import styles from './RulesModal.module.sass'
import Modal from '../../Modal/Modal'
import { MyMapInitializerContext } from '../../../context/myMapInitializer.context'

interface RulesModalProps {}

const RulesModal: React.FC<RulesModalProps> = () => {
  const { rulesModalOpened, setRulesModelOpened } = React.useContext(MyMapInitializerContext)

  return (
    <Modal
      opened={rulesModalOpened}
      onClose={() => setRulesModelOpened(false)}
      className={styles.modal}
    >
      <h4>Некоторые правила:</h4>
      <ol className={styles.rulesList}>
        <li className={styles.rulesListItem}>
          Корабли не могут стоять рядом друг с другом. <br />
          <br />
          Если корабль можно поставить, то под ним будет гореть{' '}
          <span className={styles.backlightGreen}>зелёная подсветка</span>
          <br />
          <br />
          Если корабль поставить нельзя, то будет гореть{' '}
          <span className={styles.backlightRed}>красная подсветка</span>
        </li>
      </ol>
    </Modal>
  )
}

export default RulesModal
