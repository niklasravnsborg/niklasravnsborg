import React from 'react'
import { Link as ThemeUILink } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({ to, ...props }) => {
  const isInternal = /^\/(?!\/)/.test(to)

  return isInternal ? (
    <GatsbyLink to={to} {...props} />
  ) : (
    <ThemeUILink href={to} {...props} />
  )
}

export default Link
