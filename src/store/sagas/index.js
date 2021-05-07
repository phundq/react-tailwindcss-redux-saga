import { all } from '@redux-saga/core/effects'
import account from './account'

export default function* sagas() {
  yield all([account()])
}
