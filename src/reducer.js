const initialState = {
  all: false,
  zero: false,
  one: false,
  two: false,
  three: false
}

export function logic (state = initialState, action) {
  switch(action.type) {
    case 'SELECT_ALL':
      return {
        ...state,
        all: action.all
      }
    case 'SELECT_NULL':
      return {
        ...state,
        zero: action.zero
      }
    case 'SELECT_ONE':
      return {
        ...state,
        one: action.one
      }
    case 'SELECT_TWO':
      return {
        ...state,
        two: action.two
      }
    case 'SELECT_THREE': 
      return {
        ...state,
        three: action.three
      }
    default: 
      return state
  }
}