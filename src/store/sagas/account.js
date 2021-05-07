import { all, put, takeLatest } from 'redux-saga/effects'

function* login() {
  try {
    yield put({
      type: 'TYPES.LOGIN_SUCCESS',
      payload: { message: 'login success' }
    })
  } catch (e) {
    yield put({ type: 'TYPES.LOGIN_FAIL', payload: { message: 'login fail' } })
  }
}

export default function* watcher() {
  yield all([takeLatest('TYPES.LOGIN', login)])
}
