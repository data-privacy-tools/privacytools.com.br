import { combineReducers } from 'redux'
import authStore from './auth'

export default combineReducers({
  auth: authStore
})
