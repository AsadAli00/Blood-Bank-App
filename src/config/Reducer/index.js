import { combineReducers } from 'redux'
import auth from './authReducer/auth'
import DonarData from './DonarData/DonarData'

export default combineReducers({
  auth,
  DonarData,
})