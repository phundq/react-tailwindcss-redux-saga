import React from 'react'

const InputField = props => (
  <input
    placeholder={props?.placeholder}
    className={`outline-none ring-1 w-full h-full focus:outline-none focus:ring-2 py-1 px-2 rounded-md text-center ${props?.className}`}
  />
)

export default InputField
