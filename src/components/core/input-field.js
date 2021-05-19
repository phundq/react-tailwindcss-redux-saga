import React from 'react'

const InputField = props => (
  <input
    {...props}
    className={`outline-none ring-1 w-full h-full focus:outline-none focus:ring-2 ring-opacity-40 py-1 px-2 rounded-md text-center ${props?.className}`}
  />
)

export default InputField
