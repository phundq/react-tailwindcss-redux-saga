import React from 'react'
import { connect } from 'react-redux'
import Button from '../../components/core/button'
import InputField from '../../components/core/input-field'
import actions from '../../store/actions'

const mapStateToProps = state => ({
  account: state.account
})
const mapStateToDispatch = dispatch => ({
  login: (payload, callback) => dispatch(actions.login(payload, callback))
})

const Login = props => {
  const handlerClickLogin = payload => {
    console.log(payload)
    props.login(payload)
  }

  return (
    <div className="h-screen w-full flex items-center justify-center flex-row">
      <div className="flex flex-col bg-white ring-1 ring-opacity-60 ring-gray-200  shadow-yellow-2xl rounded-md p-5 mx-8">
        <span className="text-center text-yellow-500 text-2xl">Login</span>
        <div className="md:w-80 my-7">
          <InputField
            placeholder="Enter your username"
            className="my-3 py-2 ring-yellow-400"
          />
          <InputField
            placeholder="Enter your password"
            className="my-3 py-2 ring-yellow-400"
          />
        </div>
        <div className="w-full flex justify-end">
          <Button
            className="ring-1 hover:bg-white bg-yellow-500 text-white hover:text-yellow-500 ring-opacity-60 ring-yellow-400"
            onClick={() =>
              handlerClickLogin({ username: 'phu', password: '123' })
            }
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapStateToDispatch)(Login)
