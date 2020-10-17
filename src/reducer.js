import { CATEGORY_CHANGED, DATA_LOADED } from './constants/actionTypes.js'

const reducer = (state, action) => {
  switch (action.type) {
    case DATA_LOADED: return {
      ...state,
      ...action.data,
      activeCategoryID: 0
    }
    case CATEGORY_CHANGED: return {
      ...state,
      activeCategoryID: action.activeCategoryID
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export default reducer
