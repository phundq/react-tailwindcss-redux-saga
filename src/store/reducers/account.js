import { TYPES } from '../actions'

const INIT_STATE = {
  error: '',
  user: null,
  loading: false,
  loginFail: false
}

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case TYPES.LOGIN_SUCCESS:
      return { ...state, loginFail: false, user: action.payload.user }
    default:
      return state
  }
}
