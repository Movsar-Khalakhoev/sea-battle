import React from 'react'
import styles from './Spinner.module.sass'

interface SpinnerProps {
  size?: number
}

const Spinner: React.FC<SpinnerProps> = ({ size = 30 }) => {
  return <div style={{ width: size, height: size }} className={styles.ldsDualRing} />
}

export default Spinner
