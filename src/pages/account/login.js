import React, { useState } from 'react'
import { RiAccountPinCircleFill } from 'react-icons/ri'
import { connect } from 'react-redux'
import Button from '../../components/core/button'
import InputField from '../../components/core/input-field'
import actions from '../../store/actions'

const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handlerClickLogin = () => {
    console.log(username, password)
    const payload = { username, password }
    props.login(payload)
  }

  function handlerInputChange(e) {
    if (e.target.name === 'username') {
      setUsername(e.target.value)
    } else if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
  }

  return (
    <div className="h-full w-full flex items-center justify-center flex-row">
      <div className="absolute top-1/4 flex flex-col bg-white ring-1 ring-opacity-60 ring-gray-200  shadow-xl rounded-md p-5 mx-8">
        <span className="flex  items-center justify-center text-gray-700 text-2xl">
          <RiAccountPinCircleFill className="text-4xl" />
          Login
        </span>
        <div className="md:w-80 my-7">
          <InputField
            type="text"
            placeholder="Enter your username"
            className="my-3 py-2 ring-gray-700"
            name="username"
            value={username}
            onChange={handlerInputChange}
          />
          <InputField
            type="password"
            placeholder="Enter your password"
            className="my-3 py-2 ring-gray-700"
            name="password"
            value={password}
            onChange={handlerInputChange}
          />
        </div>
        <div className="w-full flex justify-end">
          <Button
            className="ring-1 hover:bg-gray-700 hover:text-white bg-gray-100 text-gray-700 font-normal ring-opacity-60 ring-gray-500"
            onClick={handlerClickLogin}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  account: state.account
})
const mapStateToDispatch = dispatch => ({
  login: (payload, callback) => dispatch(actions.login(payload, callback))
})

export default connect(mapStateToProps, mapStateToDispatch)(Login)
