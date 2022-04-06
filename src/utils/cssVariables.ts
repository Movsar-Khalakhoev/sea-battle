export const getCssVariable = (str: string) => {
  return getComputedStyle(document.querySelector(':root') as Element).getPropertyValue(str)
}
