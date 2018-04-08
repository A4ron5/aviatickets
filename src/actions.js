export const all = (all) => ({
  type: 'SELECT_ALL',
  all
})

export const withoutStops = (zero) => ({
  type: 'SELECT_NULL',
  zero
})

export const oneStop = (one) => ({
  type: 'SELECT_ONE',
  one
})

export const twoStops = (two) => ({
  type: 'SELECT_TWO',
  two
})

export const threeStops = (three) => ({
  type: 'SELECT_THREE',
  three
})