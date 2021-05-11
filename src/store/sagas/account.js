import { all, call, put, takeLatest } from 'redux-saga/effects'
import { login } from '../../api/account'
import { sagaHelper } from '../../helpers/saga-helper'
import { TYPES } from '../actions'

export default function* watcher() {
  yield all([
    takeLatest(
      TYPES.LOGIN,
      sagaHelper({
        api: login,
        successMessage: 'Login success',
        errorMessage: 'Login fail'
      })
    )
  ])
}
