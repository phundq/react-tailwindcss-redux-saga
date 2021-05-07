import React from 'react'

const Button = props => (
  <button
    className={`outline-none focus:outline-none py-1 px-2 rounded-md ${props?.className}`}
  >
    {props.children}
  </button>
)

export default Button
