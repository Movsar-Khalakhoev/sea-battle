import React from 'react'
import styles from './Button.module.sass'
import clsx from '../../utils/clsx'
import Spinner from '../Spinner/Spinner'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  loading?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, disabled, loading, className, ...props }) => {
  return (
    <button
      className={clsx(styles.button, className, { [styles.buttonDisabled]: disabled })}
      {...props}
    >
      {loading ? <Spinner /> : children}
    </button>
  )
}

export default Button
