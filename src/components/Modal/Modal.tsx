import React from 'react'
import styles from './Modal.module.sass'

interface ModalProps {
  opened?: boolean
  onClose?: () => void
}

const Modal: React.FC<ModalProps> = ({ opened = false, onClose, children }) => {
  return (
    <>
      {opened ? (
        <div className={styles.container}>
          <div className={styles.overlay} onClick={onClose} />
          <div className={styles.content}>
            <span className={styles.contentCross} onClick={onClose} />
            {children}
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Modal
