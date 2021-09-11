import React from 'react'
import { Box } from 'rebass'

const Container = props => (
  <Box
    mx="auto"
    px="3"
    css={{
      maxWidth: props.wide ? 1300 : 900,
    }}
    {...props}
  />
)

export default Container
