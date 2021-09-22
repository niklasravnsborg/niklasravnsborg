import React from 'react'
import { Box } from 'theme-ui'

const Container = ({ sx, ...props }) => (
  <Box
    mx="auto"
    px="3"
    sx={{
      maxWidth: props.wide ? 1300 : 900,
      ...sx,
    }}
    {...props}
  />
)

export default Container
