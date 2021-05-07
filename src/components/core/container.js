import React from 'react'

const Container = props => (
  <div
    className={`w-full max-w-7xl mx-auto px-4 ${props?.className}`}
    style={props?.style}
  >
    {props.children}
  </div>
)

export default Container
