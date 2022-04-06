import React from 'react'
import styles from './Modal.module.sass'
import clsx from '../../utils/clsx'

interface ModalProps {
  opened?: boolean
  onClose?: () => void
  className?: string
}

const Modal: React.FC<ModalProps> = ({ opened = false, onClose, className, children }) => {
  return (
    <>
      {opened ? (
        <div className={styles.container}>
          <div className={styles.overlay} onClick={onClose} />
          <div className={clsx(styles.content, className)}>
            <span className={styles.contentCross} onClick={onClose} />
            {children}
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Modal
