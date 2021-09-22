import React from 'react'
import { Text } from 'theme-ui'

const Ellipsis = ({ sx, ...props }) => (
  <Text
    sx={{
      display: 'block',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      ...sx,
    }}
    {...props}
  />
)

export default Ellipsis
