import React from 'react'
import styles from './Input.module.sass'
import clsx from '../../utils/clsx'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  containerClassName?: string
}

const Input: React.FC<InputProps> = ({ label, className, containerClassName, ...props }) => {
  return (
    <div className={clsx(containerClassName)}>
      {label && <span className={styles.label}>{label}</span>}
      <input className={clsx(styles.input, className)} type='text' {...props} />
    </div>
  )
}

export default Input
