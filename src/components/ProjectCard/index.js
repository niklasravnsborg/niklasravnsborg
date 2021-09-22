import React from 'react'
import { Box, Card, Text } from 'theme-ui'

import Ellipsis from '../Ellipsis'

export default ({ href, color, name, tags, bright }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <Card p={3} bg={color} height="100%">
      <Box color={bright && 'dark'}>
        <Ellipsis sx={{ fontWeight: '500' }}>{name}</Ellipsis>
        <Text sx={{ fontSize: '.7em', fontStyle: 'italic', opacity: '.6' }}>
          {tags}
        </Text>
      </Box>
    </Card>
  </a>
)
