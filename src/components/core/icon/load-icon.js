import React from 'react'

export function loadIcon(props, icon) {
  return (
    <span className={props?.className} style={props?.style}>
      {icon}
    </span>
  )
}
