import { combineReducers } from 'redux'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
  user: searchReducer
})

export default rootReducer
