import React from 'react'
import { Box } from 'rebass'

const UnderlineLink = props => (
  <Box
    css={{
      display: 'inline-block',
      borderBottom: '2px solid black',
      a: { color: 'black' },
    }}
    {...props}
  />
)

export default UnderlineLink
