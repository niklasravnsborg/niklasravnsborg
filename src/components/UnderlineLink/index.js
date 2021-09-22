import React from 'react'
import { Box } from 'theme-ui'

const UnderlineLink = props => (
  <Box
    sx={{
      display: 'inline-block',
      borderBottom: '2px solid black',
      a: { color: 'black' },
    }}
    {...props}
  />
)

export default UnderlineLink
