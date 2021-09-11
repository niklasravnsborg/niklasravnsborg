import React from 'react'
import { Box, Card, Text } from 'rebass'

const Ellipsis = props => (
  <Text
    css={{
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }}
    {...props}
  />
)

export default ({ href, color, name, tags, bright }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <Card p={3} bg={color} height="100%">
      <Box color={bright && 'dark'}>
        <Ellipsis fontWeight="500" title={name}>
          {name}
        </Ellipsis>
        <Text fontSize=".7em" fontStyle="italic" opacity=".6">
          {tags}
        </Text>
      </Box>
    </Card>
  </a>
)
