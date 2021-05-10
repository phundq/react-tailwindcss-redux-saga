import { all, call, put, takeLatest } from 'redux-saga/effects'
import { login } from '../../api/account'

function* loginSaga(action) {
  try {
    const res = yield call(login, action.payload)

    yield put({
      type: 'TYPES.LOGIN_SUCCESS',
      payload: { message: 'login success', user: res }
    })
  } catch (e) {
    yield put({ type: 'TYPES.LOGIN_FAIL', payload: { message: 'login fail' } })
  }
}

export default function* watcher() {
  yield all([takeLatest('TYPES.LOGIN', loginSaga)])
}
