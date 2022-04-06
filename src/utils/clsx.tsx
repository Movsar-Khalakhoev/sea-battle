export default function clsx(...classes: (string | undefined | { [key: string]: any })[]): string {
  return classes
    .map(className => {
      if (!className) return ''

      if (typeof className === 'string') return className

      if (typeof className === 'object') {
        const objKeys = Object.keys(className)

        return objKeys
          .map(key => {
            if (className[key]) {
              return key
            }
            return ''
          })
          .join(' ')
      }

      return ''
    })
    .join(' ')
    .trim()
}
