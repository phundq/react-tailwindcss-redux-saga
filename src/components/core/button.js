import React from 'react'
import { connect } from 'react-redux'
import actions, { TYPES } from '../../store/actions'

const mapStateToProps = state => ({
  account: state.account
})
const mapStateToDispatch = dispatch => ({
  toLoginIn: payload => {
    dispatch({ type: 'TYPES.LOGIN', payload })
  }
})

const Button = props => {
  const handlerClickLogin = payload => {
    props.toLoginIn(payload)
  }

  return (
    <button
      onClick={() => handlerClickLogin({ username: 'phu', password: '123' })}
      className={`outline-none focus:outline-none py-1 px-2 rounded-md ${props?.className}`}
    >
      {props.children}
    </button>
  )
}

export default connect(mapStateToProps, mapStateToDispatch)(Button)
