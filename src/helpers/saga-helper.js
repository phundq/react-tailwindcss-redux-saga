import { call, put } from '@redux-saga/core/effects'
import actions from '../store/actions'

export function sagaHelper({ api, errorMessage, successMessage }) {
  return function* (action) {
    try {
      const res = yield call(api, action.data)

      yield put({
        type: `${action.type}_SUCCESS`,
        data: res,
        payload: actions.data
      })

      if (action.callback) action.callback(true, res)

      if (successMessage) console.log(successMessage)
    } catch (e) {
      console.log(e)

      yield put({
        type: `${action.type}_FAIL`,
        error: e.toString()
      })

      if (action.callback) action.callback(false, e)

      if (errorMessage) console.log(errorMessage)
    }
  }
}
