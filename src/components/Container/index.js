import React from 'react'

const Container = ({ wide, className, ...props }) => {
  const maxWidthClass = wide ? 'max-w-[1250px]' : 'max-w-[900px]'
  const classes = `${maxWidthClass} mx-auto px-3 ${className}`

  return <div className={classes} {...props} />
}

export default Container
