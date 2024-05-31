import React from 'react'

const Link = ({ to, ...props }) => {
  return <a href={to} {...props} />
}

export default Link
