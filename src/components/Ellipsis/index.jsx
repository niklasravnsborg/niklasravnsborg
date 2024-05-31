import React from 'react'

const Ellipsis = ({ className, ...props }) => (
  <div
    className="block overflow-hidden text-ellipsis whitespace-nowrap"
    {...props}
  />
)

export default Ellipsis
