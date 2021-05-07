import React from 'react'

const Wrapper = props => (
  <div className={`w-full ${props?.className}`} style={props?.style}>
    {props.children}
  </div>
)

export default Wrapper
