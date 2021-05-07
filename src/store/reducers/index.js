import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import account from './account'

const appReducer = history =>
  combineReducers({
    router: connectRouter(history),
    account
  })

export default history => appReducer(history)
