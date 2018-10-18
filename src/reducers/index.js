import { combineReducers } from 'redux'
import {
  REQUEST_HISTORY, RECEIVE_HISTORY
} from '../actions'

const history = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_HISTORY:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_HISTORY:
      return {
        ...state,
        isFetching: false,
        items: action.items,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  history
})

export default rootReducer
