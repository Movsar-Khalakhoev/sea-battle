import React from 'react'
import styles from './Button.module.sass'
import clsx from '../../utils/clsx'
import Spinner from '../Spinner/Spinner'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  loading?: boolean
  loadingLabel?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  loading,
  loadingLabel,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(styles.button, className, { [styles.buttonDisabled]: disabled })}
      {...props}
    >
      {loading ? (
        <div className={styles.buttonLoadingWrapper}>
          <Spinner />
          <span className={styles.buttonLoadingLabel}>{loadingLabel}</span>
        </div>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
