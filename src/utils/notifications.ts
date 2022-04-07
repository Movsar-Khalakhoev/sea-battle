import { Store } from 'react-notifications-component'

export const successNotification = (message: string) => {
  Store.addNotification({
    type: 'success',
    message,
    dismiss: {
      duration: 3000,
    },
    container: 'top-right',
  })
}

export const warningNotification = (message: string) => {
  Store.addNotification({
    type: 'warning',
    message,
    dismiss: {
      duration: 3000,
    },
    container: 'top-right',
  })
}

export const errorNotification = (message: string) => {
  Store.addNotification({
    type: 'danger',
    message,
    dismiss: {
      duration: 3000,
    },
    container: 'top-right',
  })
}
